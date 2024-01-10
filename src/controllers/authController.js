import { StatusCodes } from 'http-status-codes'
// import ApiError from '~/utils/ApiError'
import { authService } from '~/services/authServices'

const createNew = async (req, res, next) => {
  try {
    const createNewUser = await authService.createNew(req.body)
    res.status(StatusCodes.CREATED).json(createNewUser)

  } catch (error) {
    next(error)
  }
}

export const authController = {
  createNew,
}
