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
#[ic_cdk::query(guard=guard_prevent_anonymous_retailer)]
pub fn api_get_promo_retailer() -> Result<Vec<crate::models::promo_type::Promoprofile>, String> {
    with_read_state(|state| {
        if let Some(retailer_profile) = state.retailer.get(&ic_cdk::api::caller()) {
            if let Some(promo_ids) = &retailer_profile.promotion_id {
                let mut promotions = Vec::new();
                for promo_id in promo_ids {
                    if let Some(promo) = state.promtion.get(promo_id) {
                        promotions.push(promo.clone());
                    } else {
                        return Err(format!("Promotion ID {} not found", promo_id));
                    }
                }
                Ok(promotions)
            } else {
                Ok(Vec::new())
            }
        } else {
            Err(String::from(crate::utils::constants::ERROR_ACCOUNT_NOT_REGISTERED))
        }
    })
}