use ic_stable_structures::StableBTreeMap;

use crate::models::user_types::UserProfile;
//use crate::models::sku_types::SkuDetails;

use super::memory::StoreMemory;

pub(crate) struct ApplicationState {
    pub account: StableBTreeMap<candid::Principal, UserProfile, StoreMemory>,
   // pub sku:StableBTreeMap<String,SkuDetails,StoreMemory>//change
}

impl ApplicationState {
    pub fn new() -> Self {
        Self {
            account: init_account_state(),
            //sku:init_sku_state(),//change
        }
    }
}

fn init_account_state() -> StableBTreeMap<candid::Principal, UserProfile, StoreMemory> {
    StableBTreeMap::init(crate::store::memory::get_account_data_memory())
}
// fn init_sku_state() -> StableBTreeMap<String, SkuDetails, StoreMemory> {  //change
//     StableBTreeMap::init(crate::store::memory::get_sku_data_memory())
// }


