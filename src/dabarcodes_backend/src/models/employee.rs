use std::borrow::Cow;

use candid::{CandidType, Decode, Encode};
use ic_stable_structures::{storable::Bound, Storable};
use serde::{Deserialize, Serialize};

#[derive(Clone, CandidType, PartialEq, Debug, Serialize, Deserialize)]
pub(crate) struct Employee {
    pub name: String,                             // Product name
    pub email: String,                            // Email as a String
    pub phone_number: String,                     // Phone number as a String
    pub assigned_store: String,                   // Assigned store as a String
    pub assigned_role: String,                    // Changed to String if it represents a role name
    pub password: String,                         // Password as a String
    pub send_password: String,                    // Supplier name as a String
    pub send_password_through_email: bool,     // Description as a String
    pub logout_from_all_device: bool,             // Timestamp as u64
    pub force_to_reset_password_on_login: bool,   // Timestamp as u64
}

impl Storable for Employee {
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
