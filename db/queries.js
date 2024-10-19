const pool = require("./pool");

const getAllMessage = async () => {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
};

const getSingleMessage = async (id) => {
  const { rows } = await pool.query(`SELECT * FROM messages WHERE id = ${id} `);
  return rows;
};

const insertMessage = async (content) => {
  const { messageText, messageUser, added } = content;
  await pool.query(
    "INSERT INTO messages (text, username, added) VALUES ($1, $2, $3)",
    [messageText, messageUser, added]
  );
};

const deleteAllMessage = async () => {
  await pool.query("TRUNCATE messages");
};

module.exports = {
  getAllMessage,
  getSingleMessage,
  insertMessage,
  deleteAllMessage,
};
