// to prevent anonymous calls
use crate::with_read_state;
pub fn guard_prevent_anonymous_account() -> Result<(), String> {
    with_read_state(|state| {
        if state.account.contains_key(&ic_cdk::api::caller()) {
            Ok(())
    }else{
        return Err(String::from(
            crate::utils::constants::WARNING_ANONYMOUS_CALL,
        ));
    }
})
}
pub fn guard_prevent_anonymous_retailer() -> Result<(), String> {
    with_read_state(|state| { 
        if state.retailer.contains_key(&ic_cdk::api::caller()) {
            Ok(()) 
        } else {
            Err(String::from(crate::utils::constants::WARNING_ANONYMOUS_CALL)) 
        }
    })
}
pub fn guard_prevent_user_recreation()-> Result<(), String> {
    with_read_state(|state| { 
        if state.user.contains_key(&ic_cdk::api::caller()) {
              Err(String::from(crate::utils::constants::WARNING_ANONYMOUS_CALL)) 
        } else {
            Ok(())
        }
    })
}