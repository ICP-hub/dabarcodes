// main function from where we are calling the controller product create function.
#[ic_cdk::update]
pub fn api_create_employee(key:String,args: crate::models::employee::Employee) -> Result<String, String> {
    super::employee_controller::controller_create_employee(key.clone(),args).map_err(|err| {
        format!(
            "{}{}",
            crate::utils::constants::ERROR_EMPLOYEE_ERROR,
            err.to_string()
        )
    })?;

    Ok(String::from(crate::utils::constants::SUCCESS_EMPLOYEE_CREATED))
}

// function to update the employee.
#[ic_cdk::update]
pub fn api_update_employee(key:String,args: crate::models::employee::Employee) -> Result<String, String> {
    super::employee_controller::controller_update_employee(key.clone(),args).map_err(|err| {
        format!(
            "{}{}",
            crate::utils::constants::ERROR_EMPLOYEE_ERROR,
            err.to_string()
        )
    })?;

    Ok(String::from(
        crate::utils::constants::SUCCESS_EMPLOYEE_UPDATED,
    ))
}