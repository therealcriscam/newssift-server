const path = require('path')
const express = require('express')
const SubscriptionsService = require('./subscriptions-service')
const {requireAuth} = require('../middleware/jwt-auth')

const subscriptionsRouter = express.Router()
const jsonParser = express.json()

subscriptionsRouter
  .route('/')
  .post(requireAuth, jsonParser, (req, res, next) => {
    const {source_id, source_name} = req.body
    const newSubscription = {source_id, source_name}

    for (const [key, value] of Object.entries(newSubscription))
      if (value == null)
        return res 
          .status(400)
          .json({error: `Missing '${key}' in request body`})

    newSubscription.user_id = req.user.id

    SubscriptionsService.insertSubscription(
      req.app.get('db'),
      newSubscription
    )
      .then(subscription => {
        res
          .status(201)
          .location(path.posix.join(req.originalUrl, `/${subscription.id}`))
          .json(subscription)
      })
      .catch(next)
  })
  .get(requireAuth, (req, res, next) => {
    SubscriptionsService.getUserSubscriptions(
      req.app.get('db'),
      req.user.id
    )
      .then(subscriptions => {
        res.json(subscriptions)
      })
      .catch(next)
  })

module.exports = subscriptionsRouter;