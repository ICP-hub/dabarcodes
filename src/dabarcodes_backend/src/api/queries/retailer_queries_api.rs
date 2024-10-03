use crate::utils::guards::*;
use crate::with_read_state;

#[ic_cdk::query(guard=guard_prevent_anonymous_retailer)]
pub fn api_get_my_retailer() -> Result<crate::models::retailer_types::RetailerProfile, String> {
    with_read_state(|state| match state.retailer.get(&ic_cdk::api::caller()) {
        Some(acc) => Ok(acc),
        None => Err(String::from(
            crate::utils::constants::ERROR_ACCOUNT_NOT_REGISTERED,
        )),
    })
}
