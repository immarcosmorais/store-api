import productRepository from "../repositories/product.repository.js";
import supplierRepository from "../repositories/supplier.repository.js";

async function supplierExist(id) {
  if (await supplierRepository.find(id)) {
    return true;
  }
  throw new Error("There is not supplier with id informed");
}

async function create(product) {
  if (await supplierExist(product.supplier_id)) {
    return await productRepository.create(product);
  }
}

async function all() {
  return await productRepository.all();
}

async function find(id) {
  return await productRepository.find(id);
}

async function remove(id) {
  await productRepository.remove(id);
}

async function update(product, id) {
  if (await supplierExist(product.id)) {
    return await productRepository.update(product, id);
  }
}

export default { create, all, find, remove, update };
