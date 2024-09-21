use std::borrow::Cow;

use candid::{CandidType, Decode, Encode};
use ic_stable_structures::{storable::Bound, Storable};
use serde::{Deserialize, Serialize};

#[derive(Clone, CandidType, PartialEq, Debug, Serialize, Deserialize)]
pub(crate) struct UserProfile {
    pub name: String,
    pub pronouns: String,
    pub date: u64,
    pub ethnicity: String,
    pub primary_language: String,
    pub phone_number: String,
    pub email_address: String,
    pub country: String,
    pub state: String,
    pub city: String,
    pub postal_code: String,
    pub time_at_this_address: String,
    pub retailer_preferences: String,
    pub influencer_referral_id:Option<String>,
    pub gender_biological:Option<String>,
    pub gender_identity:Option<String>,
    pub citizenship:Option<String>,
    pub income:Option<u64>,
    pub married:Option<String>,
    pub spouse_name:Option<String>,
    pub with_children:Option<String>,
    pub age_group:Option<String>,
    pub include_maid_name:Option<String>,
    pub maid_name:Option<String>,
    pub total_number_in_household:Option<String>,
    pub privacy_preference: String,
    pub password: String,
    // pub sku_list: Option<HashMap<String,String>>,
    // add all the fields required
}

impl Storable for UserProfile {
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
