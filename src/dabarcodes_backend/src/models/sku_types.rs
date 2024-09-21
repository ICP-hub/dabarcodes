use std::borrow::Cow;

use candid::{CandidType, Decode, Encode};
use ic_stable_structures::{storable::Bound, Storable};
use serde::{Deserialize, Serialize};

#[derive(Clone, CandidType, PartialEq, Debug, Serialize, Deserialize)]
pub(crate) struct SkuDetails {
    pub name: String,
    pub brand:String,
    pub flavor:String,
    pub consistency:String,
    pub item_weight:String,
    pub price:String,
    pub active_promo:u64,
    pub promo_by:String,
    pub description:String,
    pub select_retailer:Vec<candid::Principal>,
    pub owner:candid::Principal,
}

impl Storable for SkuDetails {
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
