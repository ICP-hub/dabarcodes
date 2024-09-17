
# To generate associated functions in did file
cargo build --release --target wasm32-unknown-unknown --package dabarcodes_backend

candid-extractor target/wasm32-unknown-unknown/release/dabarcodes_backend.wasm >src/dabarcodes_backend/dabarcodes_backend.did


# deploy 
dfx deploy dabarcodes_backend