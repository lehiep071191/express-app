const userRouter = require('./user.router')
const authRouter = require('./auth.router')

function route(app) {
  app.use('/user', userRouter)
  app.use('/auth', authRouter)
}

module.exports = route