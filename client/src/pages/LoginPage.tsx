import React from 'react'
import {LoginRequest} from "../api/auth"

function LoginPage() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = (e.currentTarget.elements[0] as HTMLInputElement).value
    const password = (e.currentTarget.elements[1] as HTMLInputElement).value
    const resLogin = await LoginRequest(email, password)
    console.log(resLogin)
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