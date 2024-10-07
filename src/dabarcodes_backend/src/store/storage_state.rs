use ic_stable_structures::StableBTreeMap;
use std::string::String;

use crate::models::user_types::UserProfile;
//use crate::models::sku_types::SkuDetails;
use crate::models::employee::Employee;
use crate::models::product::Product;
use crate::models::promo_type::Promoprofile;
use crate::models::retailer_types::RetailerProfile;
use crate::models::store_detail::StoreDetail;
// use crate::models::sku_types::SkuDetails;

use super::memory::StoreMemory;

pub(crate) struct ApplicationState {
    pub account: StableBTreeMap<candid::Principal, UserProfile, StoreMemory>,
    // pub sku:StableBTreeMap<String,SkuDetails,StoreMemory>//change
    pub retailer: StableBTreeMap<candid::Principal, RetailerProfile, StoreMemory>,
    pub promtion: StableBTreeMap<String, Promoprofile, StoreMemory>,
    pub product: StableBTreeMap<String, Product, StoreMemory>,
    pub employee: StableBTreeMap<String, Employee, StoreMemory>,
    pub user: StableBTreeMap<candid::Principal, String, StoreMemory>,
    pub store:StableBTreeMap<String, StoreDetail, StoreMemory>,

    //    pub sku:StableBTreeMap<String,SkuDetails,StoreMemory>//change
}

impl ApplicationState {
    pub fn new() -> Self {
        Self {
            account: init_account_state(),
            product: product_state(),
            //sku:init_sku_state(),//change
            retailer: init_retailer_state(),
            promtion: init_promotion_state(),
            employee: employee_state(),
            store:init_store_state(),
            user: user_state(),
        }
    }
}

fn init_account_state() -> StableBTreeMap<candid::Principal, UserProfile, StoreMemory> {
    StableBTreeMap::init(crate::store::memory::get_account_data_memory())
}
fn product_state() -> StableBTreeMap<String, Product, StoreMemory> {
    StableBTreeMap::init(crate::store::memory::get_product_data_memory())
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
fn employee_state() -> StableBTreeMap<String, Employee, StoreMemory> {
    StableBTreeMap::init(crate::store::memory::get_employee_data_memory())
}
// user function ---> to use.
fn user_state() -> StableBTreeMap<candid::Principal, String, StoreMemory> {
    StableBTreeMap::init(crate::store::memory::get_user_data_memory())
}
//for store detail in retailer
fn init_store_state() -> StableBTreeMap<String, StoreDetail, StoreMemory> {
    StableBTreeMap::init(crate::store::memory::get_store_data_memory())
}
