import db from ".";

export const createRefreshToken = async (userId: string, token: string) => {

  const refreshToken = await db.refreshToken.create({
    data: {
      userId,
      token
    }
  })

  return refreshToken
}