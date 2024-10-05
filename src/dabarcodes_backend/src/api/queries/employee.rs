use crate::with_read_state;

// queary function to retrive employee data.
#[ic_cdk::query]
pub fn api_get_my_employee(
    employee_id: String,
) -> Result<crate::models::employee::Employee, String> {
    with_read_state(|state| match state.employee.get(&employee_id) {
        Some(acc) => Ok(acc),
        None => Err(String::from(
            crate::utils::constants::ERROR_EMPLOYEE_NOT_REGISTERED,
        )),
    })
}

// function to get all the employee specfic of the retailer.
#[ic_cdk::query]
pub fn api_get_all_employee() -> Result<Vec<crate::models::employee::Employee>, String> {
    with_read_state(|state| {
        if let Some(retailer_profile) = state.retailer.get(&ic_cdk::api::caller()) {
            if let Some(employee_ids) = &retailer_profile.employee_id {
                let mut employees = Vec::new();
                for employee_id in employee_ids {
                    if let Some(employee_data) = state.employee.get(employee_id) {
                        employees.push(employee_data.clone());
                    } else {
                        return Err(format!("Employee ID {} not found", employee_id));
                    }
                }
                Ok(employees)
            } else {
                Ok(Vec::new())
            }
        } else {
            Err(String::from(
                crate::utils::constants::ERROR_ACCOUNT_NOT_REGISTERED,
            ))
        }
    })
}
