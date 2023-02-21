import productService from "../services/product.service.js";

async function create(req, res, next) {
  const product = req.body;
  try {
    if (
      !product.name ||
      !product.description ||
      !product.value ||
      !product.stock ||
      !product.supplier_id
    ) {
      throw new Error(
        "Filds 'name', 'description', 'value', 'stock' and 'supplier_id' are mandatories."
      );
    }
    res.send(await productService.create(product));
    logger.info(`POST /product - ${JSON.stringify(product)}`);
  } catch (err) {
    next(err);
  }
}

async function all(req, res, next) {
  try {
    res.send(await productService.all());
    logger.info(`GET /product`);
  } catch (err) {
    next(err);
  }
}

async function find(req, res, next) {
  try {
    res.send(await productService.find(req.params.id));
    logger.info(`GET /product`);
  } catch (err) {
    next(err);
  }
}

async function remove(req, res, next) {
  try {
    await productService.remove(req.params.id);
    res.end();
    logger.info(`GET /product`);
  } catch (err) {
    next(err);
  }
}

async function update(req, res, next) {
  const product = req.body;
  try {
    if (
      !product.name ||
      !product.description ||
      !product.value ||
      !product.stock ||
      !product.supplier_id
    ) {
      throw new Error(
        "Filds 'name', 'description', 'value', 'stock' and 'supplier_id' are mandatories."
      );
    }
    res.send(await productService.update(product, req.params.id));
    logger.info(`PUT /product - ${JSON.stringify(product)}`);
  } catch (err) {
    next(err);
  }
}

export default { create, all, find, remove, update };
