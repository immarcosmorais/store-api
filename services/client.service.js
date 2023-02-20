import clientRepository from "../repositories/client.repository.js";

async function create(client) {
  return await clientRepository.create(client);
}

export default { create };
