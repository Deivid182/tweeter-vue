import { sendError } from "h3"
import db from "~/server/db"
import bcrypt from "bcrypt"
import { User } from "@prisma/client"

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const { email, password, name, username, repeatPassword } = body

  if(!email || !password || !name || !username || !repeatPassword) {
    return sendError(event, createError({
      statusCode: 400,
      statusMessage: 'Bad Request'
    }))
  }

  if(password !== repeatPassword) {
    return sendError(event, createError({
      statusCode: 400,
      statusMessage: 'Bad Request'
    }))
  }

  const userFound = await db.user.findFirst({
    where: {
      OR: [
        {
          email
        },
        {
          username
        }
      ]
    }
  })

  if(userFound) {
    return sendError(event, createError({
      statusCode: 409,
      statusMessage: 'Conflict'
    }))
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  const user = await db.user.create({
    data: {
      email,
      password: hashedPassword,
      name,
      username
    }
  })

  const formattedUser = {
    id: user.id,
    email: user.email,
    name: user.name,
    username: user.username
  }

  return {
    user: formattedUser,
    success: true,
    message: 'User created successfully'
  }

})