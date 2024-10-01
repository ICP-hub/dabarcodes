// main function from where we are calling the controller product create function.
#[ic_cdk::update]
pub fn api_create_product(args: crate::models::product::Product) -> Result<String, String> {
    super::products_controller::controller_create_product(args).map_err(|_| {
        String::from("Failed to create product") // Simplified error message
    })?;

    Ok(String::from("Product created successfully")) // Simplified success message
}
