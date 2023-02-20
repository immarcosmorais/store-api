import clientRepository from "../repositories/client.repository.js";

async function create(client) {
  return await clientRepository.create(client);
}

async function all() {
  return await clientRepository.all();
}

async function find(id) {
  return await clientRepository.find(id);
}

async function remove(id) {
  await clientRepository.remove(id);
}

async function update(client, id) {
  return await clientRepository.update(client, id);
}

export default { create, all, find, remove, update };
