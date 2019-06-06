const xss = require('xss')
const bcrypt = require('bcryptjs')

const UsersService = {
  validatePassword(password) {
    if (password.length < 8) {
      return 'Password must be longer than 8 characters.'
    }

    if (password.length > 72) {
      return 'Password must be less than 72 characters.'
    }

    if (password.startsWith(' ') || password.endsWith(' ')) {
      return 'Password must not start or end with spaces'
    }

    return null
  },
  hasUserWithUserName(db, username) {
    return db('newssift_users')
      .where({username})
      .first()
      .then(user => !!user)
  },
  insertUser(db, newUser) {
    return db
      .insert(newUser)
      .into('newssift_users')
      .returning('*')
      .then(([user]) => user)
  },
  serializeUser(user) {
    return {
      id: user.id,
      name: xss(user.name),
      username: xss(user.username)
    }
  },
  hashPassword(password) {
    return bcrypt.hash(password, 12)
  },
}

module.exports = UsersService