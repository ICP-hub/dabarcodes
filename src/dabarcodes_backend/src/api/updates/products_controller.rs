use crate::with_write_state;

// this is the controller function to create a product.
pub fn controller_create_product(
    product: crate::models::product::Product, // Change args to product
) -> Result<(), String> {
    with_write_state(|state| {
        // Use product.id as the key
        if state.product.contains_key(&product.id) {
            return Err(String::from("product already exists")); // Simplified error message
        }
        state.product.insert(product.id.clone(), product); // Insert the product using its id as the key
        Ok(())
    })
}
