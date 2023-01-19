import React from 'react'
import { Login } from '../Components/Auth/Login'

const PageLogin = ({ setUserDetails }) => {
  return (
    <div>
      <Login setUserDetails={setUserDetails} />
    </div>
  )
}

export default PageLogin