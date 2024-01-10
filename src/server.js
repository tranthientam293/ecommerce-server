/* eslint-disable no-console */
import express from 'express'
import exitHook from 'async-exit-hook'
import { closeDatabase, connectDatabase } from '~/config/database'
import { env } from '~/config/environments'
import { APIs_V1 } from '~/routes/v1/'
import { errorHandlingMiddleware } from './middlewares/errorHandling'

function startServer() {
  const app = express()
  app.use(express.json())
  // use API
  app.use('/api/v1', APIs_V1)

  // handle error
  app.use(errorHandlingMiddleware)


  app.listen(env.APP_PORT, env.APP_HOST, () => {
    console.log(
      `server is running on at http://${env.APP_HOST}:${env.APP_PORT}`
    )
  })

  exitHook(() => {
    closeDatabase()
  })
}

connectDatabase()
  .then(() => {
    console.log('Database connected!')
  })
  .then(() => {
    startServer()
  })
  .catch((err) => {
    console.error(err)
    process.exit(0)
  })
