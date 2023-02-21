import productRepository from "../repositories/product.repository.js";

async function create(client) {
  return await productRepository.create(client);
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

async function update(client, id) {
  return await productRepository.update(client, id);
}

export default { create, all, find, remove, update };
