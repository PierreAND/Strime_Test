const { Pool } = require('pg');
const { configDb } = require('../config');

const pool = new Pool (configDb)

const request =  async (text, params) => {
  const client = await pool.connect();
  try {
    const result = await client.request(text, params)
    return result;

  } finally {
    client.release();
  }
};

module.exports = {
  request,
}