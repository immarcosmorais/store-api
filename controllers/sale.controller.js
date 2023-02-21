import saleService from "../services/sale.service.js";

function validateBody(body) {
  if (!body.value || !body.date || !body.client_id || !body.product_id) {
    throw new Error(
      "Filds 'value', 'date', 'client_id' and 'product_id' are mandatories."
    );
  }
}

async function create(req, res, next) {
  const sale = req.body;
  try {
    validateBody(sale);
    res.send(await saleService.create(sale));
    logger.info(`POST /sale - ${JSON.stringify(sale)}`);
  } catch (err) {
    next(err);
  }
}

async function all(req, res, next) {
  try {
    res.send(await saleService.all());
    logger.info(`GET /sale`);
  } catch (err) {
    next(err);
  }
}

async function find(req, res, next) {
  try {
    res.send(await saleService.find(req.params.id));
    logger.info(`GET /sale`);
  } catch (err) {
    next(err);
  }
}

async function remove(req, res, next) {
  try {
    await saleService.remove(req.params.id);
    res.end();
    logger.info(`GET /sale`);
  } catch (err) {
    next(err);
  }
}

async function update(req, res, next) {
  const sale = req.body;
  try {
    validateBody(sale);
    res.send(await saleService.update(sale, req.params.id));
    logger.info(`PUT /sale - ${JSON.stringify(sale)}`);
  } catch (err) {
    next(err);
  }
}

export default { create, all, find, remove, update };
