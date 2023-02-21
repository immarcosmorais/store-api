import { connect } from "./db.js";

async function create(sale) {
  const conn = await connect();
  try {
    const sql =
      "INSERT INTO sales (value, date, client_id, product_id) VALUES ($1, $2, $3, $4) RETURNING *";
    const values = [sale.value, sale.date, sale.client_id, sale.product_id];
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
    const res = await conn.query("SELECT * FROM sales");
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
    const res = await conn.query("SELECT * FROM sales WHERE sale_id = $1", [
      id,
    ]);
    return res.rows[0];
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

async function update(sale, id) {
  const conn = await connect();
  try {
    const sql =
      "UPDATE sales SET value = $1, date = $2, client_id = $3, product_id = $4 where sale_id = $5 RETURNING *";
    const values = [sale.value, sale.date, sale.client_id, sale.product_id, id];
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
    await conn.query("DELETE FROM sales WHERE sale_id = $1", [id]);
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

export default { create, all, find, update, remove };
