// main function from where we are calling the controller product create function.
#[ic_cdk::update]
pub fn api_create_product(key: String,args: crate::models::product::Product) -> Result<String, String> {
    super::products_controller::controller_create_product(key.clone(),args).map_err(|err| {
        format!(
            "{}{}",
            crate::utils::constants::ERROR_PRODUCT_ERROR,
            err.to_string()
        )
    })?;

    Ok(String::from(crate::utils::constants::SUCCESS_PRODUCT_CREATED))
}

// function to update the product.
#[ic_cdk::update]
pub fn api_update_product(key:String,args: crate::models::product::Product) -> Result<String, String> {
    super::products_controller::controller_update_product(key.clone(),args).map_err(|err| {
        format!(
            "{}{}",
            crate::utils::constants::ERROR_PRODUCT_ERROR,
            err.to_string()
        )
    })?;

    Ok(String::from(
        crate::utils::constants::SUCCESS_PRODUCT_UPDATED,
    ))
}