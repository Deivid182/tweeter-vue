import db from "~/server/db"
import bcrypt from "bcrypt"
import { generateTokens, sendRefreshToken } from "~/server/utils/jwt"
import { createRefreshToken } from "~/server/db/refresh-token"

export default defineEventHandler(async (event) => {

  const body = await readBody(event)

  const { email, password } = body

  if(!email || !password) {
    return sendError(event, createError({
      statusCode: 400,
      statusMessage: 'Bad Request'
    }))
  }

  const userFound = await db.user.findFirst({
    where: {
      email
    }
  })

  if(!userFound) {
    return sendError(event, createError({
      statusCode: 400,
      statusMessage: 'User not found'
    }))
  }

  const passwordMatch = await bcrypt.compare(password, userFound.password)

  if(!passwordMatch) {
    return sendError(event, createError({
      statusCode: 400,
      statusMessage: 'Invalid Credentials'
    }))
  }

  const formattedUser = {
    id: userFound.id,
    email: userFound.email,
    name: userFound.name,
  }

  const { accessToken, refreshToken } = generateTokens({id: userFound.id, email: userFound.email})

  await createRefreshToken(userFound.id, refreshToken)

  await sendRefreshToken(refreshToken, event)

  return {
    accessToken,
    formattedUser
  }
})