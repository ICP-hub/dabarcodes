use ic_stable_structures::StableBTreeMap;

use crate::models::user_types::UserProfile;
//use crate::models::sku_types::SkuDetails;
use crate::models::retailer_types::RetailerProfile;
use crate::models::promo_type::Promoprofile;
use super::memory::StoreMemory;

pub(crate) struct ApplicationState {
    pub account: StableBTreeMap<candid::Principal, UserProfile, StoreMemory>,
   // pub sku:StableBTreeMap<String,SkuDetails,StoreMemory>//change
   pub retailer:StableBTreeMap<candid::Principal, RetailerProfile, StoreMemory>,
   pub promtion:StableBTreeMap<String, Promoprofile, StoreMemory>,

}

impl ApplicationState {
    pub fn new() -> Self {
        Self {
            account: init_account_state(),
            //sku:init_sku_state(),//change
            retailer:init_retailer_state(),
            promtion:init_promotion_state(),
        }
    }
}

fn init_account_state() -> StableBTreeMap<candid::Principal, UserProfile, StoreMemory> {
    StableBTreeMap::init(crate::store::memory::get_account_data_memory())
}
// fn init_sku_state() -> StableBTreeMap<String, SkuDetails, StoreMemory> {  //change
//     StableBTreeMap::init(crate::store::memory::get_sku_data_memory())
// }
fn init_retailer_state() -> StableBTreeMap<candid::Principal, RetailerProfile, StoreMemory> {
    StableBTreeMap::init(crate::store::memory::get_retailer_data_memory())
}
fn init_promotion_state() -> StableBTreeMap<String, Promoprofile, StoreMemory> {
    StableBTreeMap::init(crate::store::memory::get_promotion_data_memory())
}


