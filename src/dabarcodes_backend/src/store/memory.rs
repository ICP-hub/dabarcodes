use std::cell::RefCell;

use ic_stable_structures::{memory_manager::{MemoryId, MemoryManager}, DefaultMemoryImpl};

const ACCOUNT_DATA: MemoryId = MemoryId::new(0);
const PRODUCT_DATA: MemoryId = MemoryId::new(1);
// const SKU_DATA:MemoryId=MemoryId::new(1);
const RETAILER_DATA: MemoryId = MemoryId::new(2);
const PROMOTION_DATA:MemoryId=MemoryId::new(3);
const EMPLOYEE_DATA:MemoryId=MemoryId::new(4);
// this is for the user --->> where we were thinking to store principal id and a value.
const USER_DATA:MemoryId=MemoryId::new(5);
const STORE_DATA:MemoryId=MemoryId::new(6);

pub type StoreMemory = ic_stable_structures::memory_manager::VirtualMemory<DefaultMemoryImpl>;


thread_local! {
  static MEMORY_MANAGER: RefCell<MemoryManager<DefaultMemoryImpl>> =
      RefCell::new(MemoryManager::init(DefaultMemoryImpl::default()));
}

pub fn get_account_data_memory() -> StoreMemory {
  MEMORY_MANAGER.with(|m| m.borrow().get(ACCOUNT_DATA))
}
pub fn get_product_data_memory() -> StoreMemory {
  MEMORY_MANAGER.with(|m| m.borrow().get(PRODUCT_DATA))
}
// pub fn get_sku_data_memory() -> StoreMemory {
//   MEMORY_MANAGER.with(|m| m.borrow().get(SKU_DATA))
// }
pub fn get_retailer_data_memory() -> StoreMemory {
  MEMORY_MANAGER.with(|m| m.borrow().get(RETAILER_DATA))
}
pub fn get_promotion_data_memory() -> StoreMemory {
  MEMORY_MANAGER.with(|m| m.borrow().get(PROMOTION_DATA))
}
pub fn get_employee_data_memory() -> StoreMemory {
  MEMORY_MANAGER.with(|m| m.borrow().get(EMPLOYEE_DATA))
}
// this is our function for the user.
pub fn get_user_data_memory() -> StoreMemory {
  MEMORY_MANAGER.with(|m| m.borrow().get(USER_DATA))
}
pub fn get_store_data_memory() -> StoreMemory {
  MEMORY_MANAGER.with(|m| m.borrow().get(STORE_DATA))
}

