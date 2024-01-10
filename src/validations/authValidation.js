import Joi from 'joi'
import { StatusCodes } from 'http-status-codes'
import { REGEX_PATTERN } from '~/config'
import ApiError from '~/utils/ApiError'

const createUser = async (req, _, next) => {
  const correctCondition = Joi.object({
    userName: Joi.string().required().min(3).max(20).trim().strict(),
    password: Joi.string()
      .required()
      .min(8)
      .pattern(new RegExp(REGEX_PATTERN.user_password))
      .trim()
      .strict(),
  })

  try {
    await correctCondition.validateAsync(req.body, { abortEarly: false })
    next()
  } catch (error) {
    next(
      new ApiError(StatusCodes.UNPROCESSABLE_ENTITY, new Error(error).message)
    )
  }
}

export const authValidation = {
  createUser,
}
