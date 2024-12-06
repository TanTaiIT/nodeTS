import User from "@/models/Schema/User.schema"
import Database from "@/server/database.service"

export class UserService {
  async register(payload: { email: string, password: string }) {
    const { email, password } = payload

    const result = await Database.users.insertOne(new User({
      email,
      password
    }))

    return result
  }

  async checkEmailExist(email: string) {
    const user = await Database.users.findOne({ email })
    console.log('user', user)

    return Boolean(user)
  }

}

const userService = new UserService()
export default userService