
const express =     require('express')
const usersCtrl =   require('../Controllers')
const verifyToken = require('../Auth').verifyToken

const usersRouter = new express.Router()


usersRouter.route('/').post(usersCtrl.create)

usersRouter.post('/authenticate', usersCtrl.authenticate)

usersRouter.use(verifyToken)

usersRouter.route('/').get(usersCtrl.index)

usersRouter.route('/:id').get(usersCtrl.show)

usersRouter.route('/:id').patch(usersCtrl.update)

usersRouter.route('/:id').delete(usersCtrl.destroy)

module.exports = usersRouter