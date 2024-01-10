/* eslint-disable no-useless-catch */
const createNew = async (reqBody) => {
  try {
    const user = {
      ...reqBody,
      id: 1,
    }
    return user
  } catch (error) {
    throw error
  }
}

export const authService = {
  createNew,
}
