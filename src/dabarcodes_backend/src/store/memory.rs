use std::cell::RefCell;

use ic_stable_structures::{memory_manager::{MemoryId, MemoryManager}, DefaultMemoryImpl};

const ACCOUNT_DATA: MemoryId = MemoryId::new(0);
// const SKU_DATA:MemoryId=MemoryId::new(1);
const RETAILER_DATA: MemoryId = MemoryId::new(2);
const PROMOTION_DATA:MemoryId=MemoryId::new(3);

pub type StoreMemory = ic_stable_structures::memory_manager::VirtualMemory<DefaultMemoryImpl>;


thread_local! {
  static MEMORY_MANAGER: RefCell<MemoryManager<DefaultMemoryImpl>> =
      RefCell::new(MemoryManager::init(DefaultMemoryImpl::default()));
}

pub fn get_account_data_memory() -> StoreMemory {
  MEMORY_MANAGER.with(|m| m.borrow().get(ACCOUNT_DATA))
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
