// #[ic_cdk::update]
// pub fn api_create_sku(args: crate::models::sku_types::SkuDetails,key:String) -> Result<String, String> {
//     super::sku_controller::controller_create_sku(args,key).map_err(|err| {
//         format!(
//             "{}{}",
//             crate::utils::constants::ERROR_ACCOUNT_ERROR,
//             err.to_string()
//         )
//     })?;

//     Ok(String::from(
//         crate::utils::constants::SUCCESS_ACCOUNT_CREATED,
//     ))
// }