import express from 'express'
import { StatusCodes } from 'http-status-codes'
import { authValidation } from '~/validations/authValidation'

const Router = express.Router()

Router.route('/')
  .get((_, res) => {
    res.status(StatusCodes.OK).json({ message: 'Note: API auth' })
  })
  .post(authValidation.createUser, (_, res) => {
    res.status(StatusCodes.CREATED).json({
      message: 'Note: create new user POST',
    })
  })

export const authRoutes = Router
