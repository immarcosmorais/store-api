import supplierRepository from "../repositories/supplier.repository.js";

async function create(client) {
  return await supplierRepository.create(client);
}

async function all() {
  return await supplierRepository.all();
}

async function find(id) {
  return await supplierRepository.find(id);
}

async function remove(id) {
  await supplierRepository.remove(id);
}

async function update(client, id) {
  return await supplierRepository.update(client, id);
}

export default { create, all, find, remove, update };
