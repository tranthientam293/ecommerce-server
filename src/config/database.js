import { MongoClient, ServerApiVersion } from 'mongodb'
import { env } from './environments'
import { databaseMessages } from './messages'

let databaseInstance = null

const mongoClientInstance = new MongoClient(env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
})

export const connectDatabase = async function () {
  await mongoClientInstance.connect()
  databaseInstance = mongoClientInstance.db(env.DATABASE_NAME)
}

export function getDatabse() {
  if (!databaseInstance) {
    throw new Error(databaseMessages.not_connect)
  }

  return databaseInstance
}

export const closeDatabase = async () => {
  await mongoClientInstance.close()
}
