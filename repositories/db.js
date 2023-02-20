import pg from "pg";

async function connect() {
  if (global.connection) {
    return global.connection.connect();
  }
  const pool = new pg.Pool({
    connectionString:
      "postgres://uslnqtfi:i7jn4uvXiM6TvseIk6PVGythtxpnVGLj@drona.db.elephantsql.com/uslnqtfi",
  });
  global.connection = pool;
  return pool.connect();
}

export { connect };
