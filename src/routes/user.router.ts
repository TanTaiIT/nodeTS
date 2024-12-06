import { registerController } from '@/controllers/user.controller'
import express from 'express'
import { registerValidator } from '@/middleware/user.middleware'
const userRouter = express.Router()

userRouter.get('/', (req, res) => {
  res.status(200).send('success')
})

userRouter.post('/register', registerValidator, registerController)

export default userRouter