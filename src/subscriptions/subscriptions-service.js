const xss = require('xss')

const SubscriptionsService = {
  getAllSubscriptions(db) {
    return db
      .from('newssift_subscriptions')
      .select('*')
  },
  getUserSubscriptions(db, userId) {
    return db
      .from('newssift_subscriptions')
      .select('*')
      .where('user_id', userId)
  },
  insertSubscription(db, newSubscription) {
    return db
      .insert(newSubscription)
      .into('newssift_subscriptions')
      .returning('*')
      .then(rows => {
        return rows[0]
      })
  },
  getById(db, id) {
    return db
      .from('newssift_subscriptions')
      .select('*')
      .where('id', id)
      .first()
  },
  deleteSubscription(db, id) {
    return db('newssift_subscriptions')
      .where({id})
      .delete()
  },
}

module.exports = SubscriptionsService