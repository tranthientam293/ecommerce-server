/* eslint-disable no-console */
import express from 'express'
import exitHook from 'async-exit-hook'
import { closeDatabase, connectDatabase } from '~/config/database'
import { env } from '~/config/environments'

function startServer() {
  const app = express()

  app.get('/', function (_, res) {
    res.send('<h1>Hello, world</h1>')
  })

  app.listen(env.APP_PORT, env.APP_HOST, () => {
    console.log(`server is running on at http://${env.APP_HOST}:${env.APP_PORT}`)
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
