import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import DashBoard from '../page/DashBoard'
import Home from '../page/Home'
import { useUser } from '@clerk/clerk-react'
import Loader from '../components/Loader/Loader'

const AppRoutes = () => {
  const { isSignedIn, isLoaded } = useUser()
  if (!isLoaded) {
    return <div className='flex justify-center items-center'><Loader/></div>
  }

  return (
    <Routes>
      <Route
        path="/"
        element={isSignedIn ? <Navigate to="/dashboard" /> : <Home />}
      />

      <Route
        path="/dashboard"
        element={isSignedIn ? <DashBoard /> : <Navigate to="/" />}
      />

      <Route path="*" element={<h1>404 - Page Not Found</h1>} />
    </Routes>
  )
}

export default AppRoutes;
