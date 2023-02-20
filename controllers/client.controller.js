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

export default { create };
