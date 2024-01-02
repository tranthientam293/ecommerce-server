import Joi from 'joi'
import { StatusCodes } from 'http-status-codes'
import { REGEX_PATTERN } from '~/config'

const createUser = async (req, res, next) => {
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
    res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
      errors: new Error(error).message,
    })
  }
}

export const authValidation = {
  createUser,
}
