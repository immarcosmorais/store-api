import { connect } from "./db.js";

async function create(client) {
  const conn = await connect();
  try {
    const sql =
      "INSERT INTO clients (name, cpf, phone, email, address) VALUES ($1, $2, $3, $4, $5) RETURNING *";
    const values = [
      client.name,
      client.cpf,
      client.phone,
      client.email,
      client.address,
    ];
    const res = await conn.query(sql, values);
    return res.rows[0];
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

async function all() {
  const conn = await connect();
  try {
    const res = await conn.query("SELECT * FROM clients");
    return res.rows;
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

async function find(id) {
  const conn = await connect();
  try {
    const res = await conn.query("SELECT * FROM clients WHERE client_id = $1", [
      id,
    ]);
    return res.rows[0];
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

async function update(client, id) {
  const conn = await connect();
  try {
    const sql =
      "UPDATE clients SET name = $1, cpf = $2, phone = $3, email = $4, address = $5 where client_id = $6 RETURNING *";
    const values = [
      client.name,
      client.cpf,
      client.phone,
      client.email,
      client.address,
      id,
    ];
    const res = await conn.query(sql, values);
    return res.rows[0];
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

async function remove(id) {
  const conn = await connect();
  try {
    await conn.query("DELETE FROM clients WHERE client_id = $1", [id]);
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

export default { create, all, find, update, remove };
