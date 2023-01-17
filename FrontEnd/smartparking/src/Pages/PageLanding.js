import React from 'react'
import { Link } from 'react-router-dom'

export const PageLanding = () => {
  return (
    <div>
      <div style={{ width: "500px", height: "500px", border: "1px solid black" }}>
        This is info of our app / advertise
      </div>
      <div>
        <Link to='/login'>Login</Link>
      </div>
      <div>
        <Link to='/register'>Register</Link>
      </div>
    </div>
  )
}

export default PageLanding