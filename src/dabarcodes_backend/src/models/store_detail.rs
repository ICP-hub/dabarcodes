use std::borrow::Cow;

use candid::{CandidType, Decode, Encode};
use ic_stable_structures::{storable::Bound, Storable};
use serde::{Deserialize, Serialize};

#[derive(Clone, CandidType, PartialEq, Debug, Serialize, Deserialize)]
pub(crate) struct StoreDetail {
    pub store_type: String,           
    pub country: String,   
    pub state:String,
    pub postal_code:String, 
    pub city:String,      
    pub phone_number: String,
    pub email:String,   
    pub total_product: u32,
    pub total_supplier: u32,
    pub total_promotion: u32,
    pub total_sales: u32,
    pub total_units_sold: u32,
    pub top_selling_product: String, 
}

impl Storable for StoreDetail {
    fn to_bytes(&self) -> Cow<[u8]> {
        Cow::Owned(Encode!(self).unwrap())
    }

    fn from_bytes(bytes: Cow<[u8]>) -> Self {
        Decode!(bytes.as_ref(), Self).unwrap()
    }

    const BOUND: Bound = Bound::Bounded {
        max_size: crate::utils::constants::STORABLE_USER_MAX_VALUE_SIZE,
        is_fixed_size: false,
    };
}
