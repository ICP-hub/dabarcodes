// main function from where we are calling the controller product create function.
#[ic_cdk::update]
pub fn api_create_product(product_id: String,args: crate::models::product::Product) -> Result<String, String> {
    super::products_controller::controller_create_product(product_id,args).map_err(|err| {
        format!(
            "{}{}",
            crate::utils::constants::ERROR_PRODUCT_ERROR,
            err.to_string()
        )
    })?;

    Ok(String::from(crate::utils::constants::SUCCESS_PRODUCT_UPDATED))
}
//should be passed as refeerence &product_id