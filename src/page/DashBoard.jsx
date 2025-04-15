import React from 'react'
import OtpForm from '../components/OtpForm/OtpForm.jsx'
import { UserButton, SignedIn } from '@clerk/clerk-react'

const DashBoard = () => {
  return (
    <SignedIn>
      <div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '1rem' }}>
          <UserButton afterSignOutUrl="/" />
        </div>
        <OtpForm />
      </div>
    </SignedIn>
  )
}

export default DashBoard
