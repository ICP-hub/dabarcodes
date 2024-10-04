// main function from where we are calling the controller product create function.
#[ic_cdk::update]
pub fn api_create_employee(employee_id:String,args: crate::models::employee::Employee) -> Result<String, String> {
    super::employee_controller::controller_create_employee(employee_id,args).map_err(|err| {
        format!(
            "{}{}",
            crate::utils::constants::ERROR_EMPLOYEE_ERROR,
            err.to_string()
        )
    })?;

    Ok(String::from(crate::utils::constants::SUCCESS_EMPLOYEE_UPDATED))
}

//employee_id parameter wrong its string and should be key