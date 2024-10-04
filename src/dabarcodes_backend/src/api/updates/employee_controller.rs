use crate::with_write_state;

// this is the controller function to create a product.
pub fn controller_create_employee(
    key: String,
    employee: crate::models::employee::Employee, // Change args to product
) -> Result<(), String> {
    with_write_state(|state| {
        if let Some(mut retailer_profile) = state.retailer.get(&ic_cdk::api::caller()) {
            if state.employee.contains_key(&key.to_string()) {
                return Err(String::from(
                    crate::utils::constants::WARNING_EMPLOYEE_EXISTS,
                ));
            }
            if let Some(promo_ids) = &mut retailer_profile.employee_id {
                promo_ids.push(key.clone().to_string());
            } else {
                retailer_profile.employee_id = Some(vec![key.to_string()]);
            }
            state.employee.insert(key.clone(), employee);
            state
                .retailer
                .insert(ic_cdk::api::caller(), retailer_profile);
            Ok(())
        } else {
            Err(String::from(
                crate::utils::constants::ERROR_ACCOUNT_NOT_REGISTERED,
            ))
        }
    })
}

// function to update the employee.
pub fn controller_update_employee(
    key: String,
    args: crate::models::employee::Employee,
) -> Result<(), String> {
    with_write_state(|state| {
        if state.retailer.get(&ic_cdk::api::caller()).is_some() {
            if let Some(existing_profile) = state.employee.get(&key.to_string()) {
                let updated_profile = crate::models::employee::Employee {
                    name: if args.name.is_empty() {
                        existing_profile.name.clone()
                    } else {
                        args.name.clone()
                    },
                    email: if args.email.is_empty() {
                        existing_profile.email.clone()
                    } else {
                        args.email.clone()
                    },
                    phone_number: if args.phone_number.is_empty() {
                        existing_profile.phone_number.clone()
                    } else {
                        args.phone_number.clone()
                    },
                    assigned_store: if args.assigned_store.is_empty() {
                        existing_profile.assigned_store
                    } else {
                        args.assigned_store.clone()
                    },
                    assigned_role: if args.assigned_role.is_empty() {
                        existing_profile.assigned_role.clone()
                    } else {
                        args.assigned_role.clone()
                    },
                    password: if args.password.is_empty() {
                        existing_profile.password.clone()
                    } else {
                        args.password.clone()
                    },
                };

                // Update the stored profile
                state.employee.insert(key.clone(), updated_profile);
                Ok(())
            } else {
                Err(String::from(
                    crate::utils::constants::ERROR_EMPLOYEE_NOT_REGISTERED,
                ))
            }
        } else {
            Err(String::from(
                crate::utils::constants::ERROR_ACCOUNT_NOT_REGISTERED,
            ))
        }
    })
}
