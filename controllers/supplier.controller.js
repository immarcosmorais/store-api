import supplierService from "../services/supplier.service.js";

async function create(req, res, next) {
  const supplier = req.body;
  try {
    if (
      !supplier.name ||
      !supplier.cnpj ||
      !supplier.phone ||
      !supplier.email ||
      !supplier.address
    ) {
      throw new Error(
        "Filds 'name', 'cnpj', 'phone', 'email' and 'address' are mandatories."
      );
    }
    res.send(await supplierService.create(supplier));
    logger.info(`POST /supplier - ${JSON.stringify(supplier)}`);
  } catch (err) {
    next(err);
  }
}

async function all(req, res, next) {
  try {
    res.send(await supplierService.all());
    logger.info(`GET /supplier`);
  } catch (err) {
    next(err);
  }
}

async function find(req, res, next) {
  try {
    res.send(await supplierService.find(req.params.id));
    logger.info(`GET /supplier`);
  } catch (err) {
    next(err);
  }
}

async function remove(req, res, next) {
  try {
    await supplierService.remove(req.params.id);
    res.end();
    logger.info(`GET /supplier`);
  } catch (err) {
    next(err);
  }
}

async function update(req, res, next) {
  const supplier = req.body;
  try {
    if (
      !supplier.name ||
      !supplier.cnpj ||
      !supplier.phone ||
      !supplier.email ||
      !supplier.address
    ) {
      throw new Error(
        "Filds 'name', 'cnpj', 'phone', 'email' and 'address' are mandatories."
      );
    }
    res.send(await supplierService.update(supplier, req.params.id));
    logger.info(`PUT /supplier - ${JSON.stringify(supplier)}`);
  } catch (err) {
    next(err);
  }
}

export default { create, all, find, remove, update };
