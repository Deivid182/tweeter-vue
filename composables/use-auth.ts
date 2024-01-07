import type { Credentials } from "~/types"
const useAuth = () => {
  const login = (credentials: Credentials) => {
    return new Promise(async () => {
      try {
        const { accessToken, formattedUser } = await $fetch('/api/auth/login', {
          method: 'POST',
          body: credentials
        })
        console.log(accessToken, formattedUser)
      } catch (error) {
        console.log(error)
      }
    })
  }

  return {
    login
  }
}

export default useAuth