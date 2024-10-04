use crate::with_read_state;

// queary function to retrive employee data.
#[ic_cdk::query]
pub fn api_get_my_employee(employee_id: String) -> Result<crate::models::employee::Employee, String> {
    with_read_state(|state| match state.employee.get(&employee_id) {
        Some(acc) => Ok(acc),
        None => Err(String::from(
            crate::utils::constants::ERROR_EMPLOYEE_NOT_REGISTERED,
        )),
    })
}
