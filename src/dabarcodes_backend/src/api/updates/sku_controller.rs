

// use crate::with_write_state;
// pub fn controller_create_sku(
//     args: crate::models::sku_types::SkuDetails,key:String
// ) -> Result<(), String> {
//     with_write_state(|state| {

//       // checking if user already exists
//         if state.sku.contains_key(&key) {
//             return Err(String::from(
//                 crate::utils::constants::WARNING_ACCOUNT_EXISTS,
//             ));
//         } else {
//         }
//         state.sku.insert(key, args);
//         Ok(())
//     })
// }