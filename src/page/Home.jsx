import React from 'react'
import { Navigate } from 'react-router-dom'
import { useUser, SignedOut, SignInButton } from '@clerk/clerk-react'

const Home = () => {
  const { isSignedIn } = useUser()
  if (isSignedIn) {
    return <Navigate to="/dashboard" />
  }

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <header>
        <div>
          <h1><strong>Welcome to OTP-Form Application</strong></h1>
          <p className='text-center'>Sign in to continue to verification</p>
        </div>
<div className='flex justify-center items-center mt-5'>  
    <SignedOut>
          <SignInButton redirectUrl="/dashboard" className="bg-blue-700 text-white h-10 w-28 rounded-2xl"/>
        </SignedOut>
        </div>
      
      </header>
    </div>
  )
}

export default Home
