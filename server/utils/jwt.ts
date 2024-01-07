import jwt from 'jsonwebtoken'
import {H3Event, EventHandlerRequest} from 'h3'

interface User {
  id: string
  email: string
}

const generateAccessToken = (user: User) => {
  const config = useRuntimeConfig()

  return jwt.sign({ id: user.id }, config.jwtAccessSecret, { expiresIn: '15m' })
}

const generateRefreshToken = (user: User) => {
  const config = useRuntimeConfig()

  return jwt.sign({ id: user.id }, config.jwtRefreshSecret, { expiresIn: '7d' })
}

export const sendRefreshToken = async (token: string, event: H3Event<EventHandlerRequest>) => {
  setCookie(event, 'refreshToken', token, {
    httpOnly: true,
    sameSite: true
  })
}

export const generateTokens = (user: User) => {

  const accessToken = generateAccessToken(user)
  const refreshToken = generateRefreshToken(user)

  return {
    accessToken,
    refreshToken
  }

}