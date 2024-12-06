import express from 'express'
import { sum } from './src/utils/index.ts'
import userRouter from './src/routes/user.router.ts'
import Database from './src/server/database.service.ts'
import bodyParser from 'body-parser'
const app = express()
const port = 4000

app.get('/', (req, res) => {
  const data: any = null
  const value = sum(data)
  res.send(`Hello World! ${value}`)
})

Database.connect()
app.use(bodyParser.json())
app.use('/user', userRouter)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})