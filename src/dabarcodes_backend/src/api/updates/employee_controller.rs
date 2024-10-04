use crate::with_write_state;

// this is the controller function to create a product.
pub fn controller_create_employee(
  employee_id:String, employee: crate::models::employee::Employee, // Change args to product
) -> Result<(), String> {
    with_write_state(|state| {
        // Use product.id as the key
        if state.employee.contains_key(&employee_id.to_string()) {
            return Err(String::from(crate::utils::constants::WARNING_EMPLOYEE_EXISTS)); // Simplified error message
        }
        state.employee.insert(employee_id.clone(), employee); // Insert the product using its id as the key
        Ok(())
    })
}//do the same as how i have done in the function add promo in retailer_controller.rs
//incomplete