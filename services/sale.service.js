import saleRepository from "../repositories/sale.repository.js";
import productRepository from "../repositories/product.repository.js";
import clientRepository from "../repositories/client.repository.js";

async function productExist(id) {
  if (await productRepository.find(id)) {
    return true;
  }
  throw new Error("There is not product with id informed");
}

async function clientExist(id) {
  if (await clientRepository.find(id)) {
    return true;
  }
  throw new Error("There is not client with id informed");
}

async function create(sale) {
  if (
    (await productExist(sale.product_id)) &&
    (await clientExist(sale.client_id))
  ) {
    return await saleRepository.create(sale);
  }
}

async function all() {
  return await saleRepository.all();
}

async function find(id) {
  return await saleRepository.find(id);
}

async function remove(id) {
  await saleRepository.remove(id);
}

async function update(sale, id) {
  if (
    (await productExist(sale.product_id)) &&
    (await clientExist(sale.client_id))
  ) {
    return await saleRepository.update(sale, id);
  }
}

export default { create, all, find, remove, update };
