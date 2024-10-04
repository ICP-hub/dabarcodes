use crate::with_write_state;

// this is the controller function to create a product.
pub fn controller_create_product(
   product_id:String, product: crate::models::product::Product, // Change args to product
) -> Result<(), String> {
    with_write_state(|state| {
        // Use product.id as the key
        if state.product.contains_key(&product_id.to_string()) {
            return Err(String::from(crate::utils::constants::WARNING_PRODUCT_EXISTS)); // Simplified error message
        }
        state.product.insert(product_id.clone(), product); // Insert the product using its id as the key
        Ok(())
    })
}
//do the same as how i have done in the function add promo in retailer_controller.rs
//incomplete