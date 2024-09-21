


use crate::with_write_state;

pub fn controller_create_account(
    args: crate::models::user_types::UserProfile,
) -> Result<(), String> {
    with_write_state(|state| {
        if state.account.contains_key(&ic_cdk::api::caller()) {
            return Err(String::from(
                crate::utils::constants::WARNING_ACCOUNT_EXISTS,
            ));
        } else {
        }
        state.account.insert(ic_cdk::api::caller(), args);
        Ok(())
    })
}
pub fn controller_update_account(
    args: crate::models::user_types::UserProfile,
) -> Result<(), String> {
    with_write_state(|state| {
        if let Some(existing_profile) = state.account.get(&ic_cdk::api::caller()) {
            let updated_profile = crate::models::user_types::UserProfile {
                name: if args.name.is_empty() {
                    existing_profile.name.clone()
                } else {
                    args.name.clone()
                },
                pronouns: if args.pronouns.is_empty() {
                    existing_profile.pronouns.clone()
                } else {
                    args.pronouns.clone()
                },
                date: if args.date == 0 {
                    existing_profile.date
                } else {
                    args.date
                },
                ethnicity: if args.ethnicity.is_empty() {
                    existing_profile.ethnicity.clone()
                } else {
                    args.ethnicity.clone()
                },
                primary_language: if args.primary_language.is_empty() {
                    existing_profile.primary_language.clone()
                } else {
                    args.primary_language.clone()
                },
                phone_number: if args.phone_number.is_empty() {
                    existing_profile.phone_number.clone()
                } else {
                    args.phone_number.clone()
                },
                email_address: if args.email_address.is_empty() {
                    existing_profile.email_address.clone()
                } else {
                    args.email_address.clone()
                },
                country: if args.country.is_empty() {
                    existing_profile.country.clone()
                } else {
                    args.country.clone()
                },
                state: if args.state.is_empty() {
                    existing_profile.state.clone()
                } else {
                    args.state.clone()
                },
                city: if args.city.is_empty() {
                    existing_profile.city.clone()
                } else {
                    args.city.clone()
                },
                postal_code: if args.postal_code.is_empty() {
                    existing_profile.postal_code.clone()
                } else {
                    args.postal_code.clone()
                },
                time_at_this_address: if args.time_at_this_address.is_empty() {
                    existing_profile.time_at_this_address.clone()
                } else {
                    args.time_at_this_address.clone()
                },
                retailer_preferences: if args.retailer_preferences.is_empty() {
                    existing_profile.retailer_preferences.clone()
                } else {
                    args.retailer_preferences.clone()
                },
                influencer_referral_id: if args.influencer_referral_id.is_none() {
                    existing_profile.influencer_referral_id.clone()
                } else {
                    args.influencer_referral_id.clone()
                },
                gender_biological: if args.gender_biological.is_none() {
                    existing_profile.gender_biological.clone()
                } else {
                    args.gender_biological.clone()
                },
                gender_identity: if args.gender_identity.is_none() {
                    existing_profile.gender_identity.clone()
                } else {
                    args.gender_identity.clone()
                },
                citizenship: if args.citizenship.is_none() {
                    existing_profile.citizenship.clone()
                } else {
                    args.citizenship.clone()
                },
                income: if args.income.is_none() {
                    existing_profile.income
                } else {
                    args.income
                },
                married: if args.married.is_none() {
                    existing_profile.married.clone()
                } else {
                    args.married.clone()
                },
                spouse_name: if args.spouse_name.is_none() {
                    existing_profile.spouse_name.clone()
                } else {
                    args.spouse_name.clone()
                },
                with_children: if args.with_children.is_none() {
                    existing_profile.with_children.clone()
                } else {
                    args.with_children.clone()
                },
                age_group: if args.age_group.is_none() {
                    existing_profile.age_group.clone()
                } else {
                    args.age_group.clone()
                },
                include_maid_name: if args.include_maid_name.is_none() {
                    existing_profile.include_maid_name.clone()
                } else {
                    args.include_maid_name.clone()
                },
                maid_name: if args.maid_name.is_none() {
                    existing_profile.maid_name.clone()
                } else {
                    args.maid_name.clone()
                },
                total_number_in_household: if args.total_number_in_household.is_none() {
                    existing_profile.total_number_in_household.clone()
                } else {
                    args.total_number_in_household.clone()
                },
                privacy_preference: if args.privacy_preference.is_empty() {
                    existing_profile.privacy_preference.clone()
                } else {
                    args.privacy_preference.clone()
                },
                password: if args.password.is_empty() {
                    existing_profile.password.clone()
                } else {
                    args.password.clone()
                },
                // sku_list: if let Some(new_sku_list) = &args.sku_list {
                //     Some(new_sku_list.clone())
                // } else {
                //     existing_profile.sku_list.clone()
                // },
            };

            // Update the stored profile
            state.account.insert(ic_cdk::api::caller(), updated_profile);
            Ok(())
        } else {
            Err(String::from(crate::utils::constants::ERROR_ACCOUNT_NOT_REGISTERED))
        }
    })
}

// pub fn controller_subscribe_sku(
//     key: String, value: String
// ) -> Result<(), String> {
//     with_write_state(|state| {
//         if let Some(mut existing_profile) = state.account.get(&ic_cdk::api::caller()) {
//             match &mut existing_profile.sku_list {
//                 Some(sku_list) => {
//                     sku_list.insert(key, value); 
//                 }
//                 None => {
//                     let mut new_sku_list = HashMap::new();
//                     new_sku_list.insert(key, value);
//                     existing_profile.sku_list = Some(new_sku_list); 
//                 }
//             }
//             state.account.insert(ic_cdk::api::caller(), existing_profile);
//             Ok(())
//         } else {
//             Err(String::from(crate::utils::constants::ERROR_ACCOUNT_NOT_REGISTERED))
//         }
//     })
// }