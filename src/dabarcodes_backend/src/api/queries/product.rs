use crate::with_read_state;

// queary function to retrive product data.
#[ic_cdk::query]
pub fn api_get_my_product(product_id: String) -> Result<crate::models::product::Product, String> {
    with_read_state(|state| match state.product.get(&product_id) {
        Some(acc) => Ok(acc),
        None => Err(String::from(
            "there is no product of this id"
        )),
    })
}
