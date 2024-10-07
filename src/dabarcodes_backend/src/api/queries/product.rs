use crate::with_read_state;

// queary function to retrive product data.
#[ic_cdk::query]
pub fn api_get_my_product(product_id: String) -> Result<crate::models::product::Product, String> {
    with_read_state(|state| match state.product.get(&product_id) {
        Some(acc) => Ok(acc),
        None => Err(String::from(
            crate::utils::constants::ERROR_PRODUCT_NOT_REGISTERED,
        )),
    })
}

// function to get all the products specfic of the retailer.
#[ic_cdk::query]
pub fn api_get_all_product() -> Result<Vec<crate::models::product::Product>,String> {
    with_read_state(|state| {
        if let Some(retailer_profile) = state.retailer.get(&ic_cdk::api::caller()) {
            if let Some(product_ids) = &retailer_profile.product_id {
                let mut products = Vec::new();
                for product_id in product_ids {
                    if let Some(product_data) = state.product.get(product_id) {
                        products.push(product_data.clone());
                    } else {
                        return Err(format!("Product ID {} not found", product_id));
                    }
                }
                Ok(products)
            } else {
                Ok(Vec::new())
            }
        } else {
            Err(String::from(
                crate::utils::constants::ERROR_ACCOUNT_NOT_REGISTERED,
            ))
        }
    })
}
