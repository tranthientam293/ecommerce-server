import { StatusCodes } from 'http-status-codes'
import ApiError from '~/utils/ApiError'

const createNew = async (req, res, next) => {
  try {
    throw new ApiError(StatusCodes.BAD_GATEWAY, 'api next errors')
  } catch (error) {
    next(error)
  }
}

export const authController = {
  createNew
}
