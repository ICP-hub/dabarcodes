use std::borrow::Cow;

use candid::{CandidType, Decode, Encode};
use ic_stable_structures::{storable::Bound, Storable};
use serde::{Deserialize, Serialize};

#[derive(Clone, CandidType, PartialEq, Debug, Serialize, Deserialize)]
pub(crate) struct RetailerProfile {
    pub name: String,
    pub phone_number: String,
    pub email_address: String,
    pub role: String,
    pub store_name: String,
    pub store_location: String,
    pub password: String,
    pub email_notification: bool,
    pub mobile_notification:bool,
    pub retailer_preferences: String,
    pub promotion_id:Option<Vec<String>>,
    pub supplier_id:Option<Vec<String>>,
    pub product_id:Option<Vec<String>>,
    pub employee_id:Option<Vec<String>>,
    pub store_id:Option<Vec<String>>,
}

impl Storable for RetailerProfile {
    fn to_bytes(&self) -> std::borrow::Cow<[u8]> {
        Cow::Owned(Encode!(self).unwrap())
    }

    fn from_bytes(bytes: std::borrow::Cow<[u8]>) -> Self {
        Decode!(bytes.as_ref(), Self).unwrap()
    }

    const BOUND: Bound = Bound::Bounded {
        max_size: crate::utils::constants::STORABLE_USER_MAX_VALUE_SIZE,
        is_fixed_size: false,
    };
}
