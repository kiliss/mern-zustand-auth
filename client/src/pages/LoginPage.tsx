import React from 'react'
import {LoginRequest, profileRequest} from "../api/auth"
import {useAuthStore} from "../store/auth"

function LoginPage() {

  const setToken = useAuthStore (state => state.setToken)
  const setUser = useAuthStore (state => state.setProfile)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = (e.currentTarget.elements[0] as HTMLInputElement).value
    const password = (e.currentTarget.elements[1] as HTMLInputElement).value
    const resLogin = await LoginRequest(email, password)
    setToken(resLogin.data.token)
    const resProfile = await profileRequest()
    setUser(resProfile.data.profile)
    
  }



  return (
    <form onSubmit={handleSubmit}>
      <label>Email</label>
      <input type="email" placeholder='example@gmail.com' />
      <label htmlFor="password">Password</label>
      <input type="password" placeholder='password' />
      <button>Login</button>
    </form>
  )
}

export default LoginPage