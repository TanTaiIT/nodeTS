
import User from "@/models/Schema/User.schema";
import { Collection, Db, MongoClient, ServerApiVersion } from "mongodb";
const uri = "mongodb+srv://tantaiit3000:tantaiIT1908@cty.xrgb5.mongodb.net/?retryWrites=true&w=majority&appName=Cty"

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// export async function run() {

// }

class DatabaseConnect {
  private client: MongoClient
  private db: Db
  constructor() {
    this.client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
    });

    this.db = this.client.db('Shoping')
  }

  async connect() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await this.client.connect();
      // Send a ping to confirm a successful connection
      await this.db.command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } catch {
      // Ensures that the client will close when you finish/error
      await this.client.close();
    }
  }

  get users(): Collection<User> {
    return this.db.collection('users')
  }
}

const Database = new DatabaseConnect()
export default Database