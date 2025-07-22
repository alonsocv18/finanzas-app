const db = require('../../config/database')

class User {
  static async create({ name, email, password }) {
    const query = `
            INSERT INTO users (name, email, password)
            VALUES ($1, $2, $3)
            RETURNING id, name, email
        `

    try {
      const { rows } = await db.query(query, [name, email, password])
      return rows[0]
    } catch (error) {
      throw error
    }
  }

  static async findByEmail(email) {
    const query = `
            SELECT *
            FROM users
            WHERE email = $1
        `

    try {
      const { rows } = await db.query(query, [email])
      return rows[0]
    } catch (error) {
      throw error
    }
  }
}

module.exports = User
