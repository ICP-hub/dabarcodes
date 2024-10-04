use crate::with_write_state;

pub fn controller_create_retailer(
    args: crate::models::retailer_types::RetailerProfile,
) -> Result<(), String> {
    with_write_state(|state| {
        if state.retailer.contains_key(&ic_cdk::api::caller()) {
            return Err(String::from(
                crate::utils::constants::WARNING_ACCOUNT_EXISTS,
            ));
        } else {
        }
        state.retailer.insert(ic_cdk::api::caller(), args);
        state.user.insert(ic_cdk::api::caller(), "retailer".to_string());

        Ok(())
    })
}

pub fn controller_update_retailer(
    args: crate::models::retailer_types::RetailerProfile,
) -> Result<(), String> {
    with_write_state(|state| {
        if let Some(existing_profile) = state.retailer.get(&ic_cdk::api::caller()) {
            // Create an updated profile by keeping existing values for empty or `None` fields
            let updated_profile = crate::models::retailer_types::RetailerProfile {
                name: if args.name.is_empty() {
                    existing_profile.name.clone()
                } else {
                    args.name.clone()
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
                role: if args.role.is_empty() {
                    existing_profile.role.clone()
                } else {
                    args.role.clone()
                },
                store_name: if args.store_name.is_empty() {
                    existing_profile.store_name.clone()
                } else {
                    args.store_name.clone()
                },
                store_location: if args.store_location.is_empty() {
                    existing_profile.store_location.clone()
                } else {
                    args.store_location.clone()
                },
                password: if args.password.is_empty() {
                    existing_profile.password.clone()
                } else {
                    args.password.clone()
                },
                email_notification: args.email_notification,
                mobile_notification: args.mobile_notification,
                retailer_preferences: if args.retailer_preferences.is_empty() {
                    existing_profile.retailer_preferences.clone()
                } else {
                    args.retailer_preferences.clone()
                },
                promotion_id: if args.promotion_id.is_none() {
                    existing_profile.promotion_id.clone()
                } else {
                    args.promotion_id.clone()
                },
                supplier_id: if args.supplier_id.is_none() {
                    existing_profile.supplier_id.clone()
                } else {
                    args.supplier_id.clone()
                },
                product_id: if args.product_id.is_none() {
                    existing_profile.product_id.clone()
                } else {
                    args.product_id.clone()
                },
                emplyee_id: if args.emplyee_id.is_none() {
                    existing_profile.emplyee_id.clone()
                } else {
                    args.emplyee_id.clone()
                },
            };

            // Update the stored retailer profile
            state.retailer.insert(ic_cdk::api::caller(), updated_profile);
            Ok(())
        } else {
            Err(String::from(crate::utils::constants::ERROR_ACCOUNT_NOT_REGISTERED))
        }
    })
}

pub fn controller_promo_retailer(
    key: &str, 
    args: crate::models::promo_type::Promoprofile
) -> Result<(), String> {
    with_write_state(|state| {
        if let Some(mut retailer_profile) = state.retailer.get(&ic_cdk::api::caller()) {
            state.promtion.insert(key.to_string(), args);
            if let Some(promo_ids) = &mut retailer_profile.promotion_id {
                promo_ids.push(key.to_string());
            } else {
                retailer_profile.promotion_id = Some(vec![key.to_string()]);
            }
            state.retailer.insert(ic_cdk::api::caller(), retailer_profile);
            Ok(())
        } else {
            Err(String::from(crate::utils::constants::ERROR_ACCOUNT_NOT_REGISTERED))
        }
    })
}