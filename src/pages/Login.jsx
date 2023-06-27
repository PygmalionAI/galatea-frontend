import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { LoginNavBar, LoginForm } from '../components' 

const Login = () => {
  return (
    <>
    <div className="ga-black scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-purple/900 scrollbar flex h-screen flex-col">
      <div>
        <LoginNavBar />
      </div>
      <div className="w-full flex justify-center mt-10">
        <div className="my-4 border-b border-white/5" />
        <div className="w-full max-w-sm">
          <h1 className="text-4xl">Welcome.</h1>
          <p className="text-white/50">Please log in to your account.</p>
          <div className="my-4 border-b border-white/5" />
          <LoginForm />
        </div>
      </div>
    </div>
    </>
  )
}

export default Login;