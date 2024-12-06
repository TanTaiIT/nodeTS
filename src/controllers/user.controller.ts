import User from '@/models/Schema/User.schema'
// import Database from './../service/database.service.js'
import Database from '@/server/database.service'
// import { Request, Response } from 'express'
export const registerController = async (req: any, res: any) => {
  try {
    const { email, password } = req.body
    await Database.users.insertOne(new User({
      email,
      password
    }))
    return res.status(200).send('success')
  } catch (error) {
    res.status(400).json({ message: error })
  }


}