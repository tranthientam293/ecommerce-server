import express from 'express'
import { StatusCodes } from 'http-status-codes'
import { authController } from '~/controllers/authController'
import { authValidation } from '~/validations/authValidation'

const Router = express.Router()

Router.route('/')
  .get((req, res) => {
    res.status(StatusCodes.OK).json({ message: 'Note: API auth' })
  })
  .post(authValidation.createUser, authController.createNew)

export const authRoutes = Router
