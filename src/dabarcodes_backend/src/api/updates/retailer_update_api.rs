use crate::utils::guards::*;

//account creation
#[ic_cdk::update(guard=guard_prevent_user_recreation)]
pub fn api_create_retailer(args: crate::models::retailer_types::RetailerProfile) -> Result<String, String> {
    super::retailer_controller::controller_create_retailer(args).map_err(|err| {
        format!(
            "{}{}",
            crate::utils::constants::ERROR_ACCOUNT_ERROR,
            err.to_string()
        )
    })?;

    Ok(String::from(
        crate::utils::constants::SUCCESS_ACCOUNT_CREATED,
    ))
}

//retailer update
#[ic_cdk::update(guard=guard_prevent_anonymous_retailer)]
pub fn api_update_retailer(args: crate::models::retailer_types::RetailerProfile) -> Result<String, String> {
    super::retailer_controller::controller_update_retailer(args).map_err(|err| {
        format!(
            "{}{}",
            crate::utils::constants::ERROR_ACCOUNT_ERROR,
            err.to_string()
        )
    })?;

    Ok(String::from(
        crate::utils::constants::SUCCESS_ACCOUNT_UPDATED,
    ))
}

//adding promotion
#[ic_cdk::update(guard=guard_prevent_anonymous_retailer)]
pub fn api_add_retailer_promo(key:String,args:crate::models::promo_type::Promoprofile)-> Result<String, String> {
    super::retailer_controller::controller_promo_retailer(&key,args).map_err(|err| {
        format!(
            "{}{}",
            crate::utils::constants::PROMO_ADD_ERROR,
            err.to_string()
        )
    })?;

    Ok(String::from(
        crate::utils::constants::PROMO_ADD_SUCCESS,
    ))
}
#[ic_cdk::update(guard=guard_prevent_anonymous_retailer)]
pub fn api_update_promotion(key:String,args: crate::models::promo_type::Promoprofile) -> Result<String, String> {
    super::retailer_controller::controller_update_promo(key.clone(),args).map_err(|err| {
        format!(
            "{}{}",
            crate::utils::constants::ERROR_PROMOTION_ERROR,
            err.to_string()
        )
    })?;

    Ok(String::from(
        crate::utils::constants::SUCCESS_PROMOTION_UPDATED,
    ))
}
