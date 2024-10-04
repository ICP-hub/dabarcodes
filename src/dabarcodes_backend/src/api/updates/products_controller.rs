use crate::with_write_state;

// this is the controller function to create a product.
pub fn controller_create_product(
    key:String, product: crate::models::product::Product, // Change args to product
) -> Result<(), String> {
    with_write_state(|state| {
        if let Some(mut retailer_profile) = state.retailer.get(&ic_cdk::api::caller()){
            if state.product.contains_key(&key.to_string()) {
                return Err(String::from(crate::utils::constants::WARNING_PRODUCT_EXISTS));
            }
            if let Some(promo_ids) = &mut retailer_profile.product_id {
                promo_ids.push(key.clone().to_string());
            } else {
                retailer_profile.product_id = Some(vec![key.to_string()]);
            }
            state.product.insert(key.clone(), product); 
            state.retailer.insert(ic_cdk::api::caller(), retailer_profile);
            Ok(())
        }
        else {
            Err(String::from(crate::utils::constants::ERROR_ACCOUNT_NOT_REGISTERED))
        }
    })
}
//do the same as how i have done in the function add promo in retailer_controller.rs
//incomplete