import clientService from "../services/client.service.js";

async function create(req, res, next) {
  const client = req.body;
  try {
    if (
      !client.name ||
      !client.cpf ||
      !client.phone ||
      !client.email ||
      !client.address
    ) {
      throw new Error(
        "Filds 'name', 'cpf', 'phone', 'email' and 'address' are mandatories."
      );
    }
    res.send(await clientService.create(client));
    logger.info(`POST /client - ${JSON.stringify(client)}`);
  } catch (err) {
    next(err);
  }
}

async function all(req, res, next) {
  try {
    res.send(await clientService.all());
    logger.info(`GET /client`);
  } catch (err) {
    next(err);
  }
}

async function find(req, res, next) {
  try {
    res.send(await clientService.find(req.params.id));
    logger.info(`GET /client`);
  } catch (err) {
    next(err);
  }
}

async function remove(req, res, next) {
  try {
    await clientService.remove(req.params.id);
    res.end();
    logger.info(`GET /client`);
  } catch (err) {
    next(err);
  }
}

async function update(req, res, next) {
  const client = req.body;
  try {
    if (
      !client.name ||
      !client.cpf ||
      !client.phone ||
      !client.email ||
      !client.address
    ) {
      throw new Error(
        "Filds 'name', 'cpf', 'phone', 'email' and 'address' are mandatories."
      );
    }
    res.send(await clientService.update(client, req.params.id));
    logger.info(`PUT /client - ${JSON.stringify(client)}`);
  } catch (err) {
    next(err);
  }
}

export default { create, all, find, remove, update };
