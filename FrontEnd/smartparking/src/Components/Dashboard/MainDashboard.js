import React from 'react'
import { Link } from 'react-router-dom'

export const MainDashboard = ({ displayView }) => {
  return (
    <div>
      This is MainDashboard component
      <div>
        <Link to='/dashboard/locations'>
          <button>
            View Locations
          </button>
        </Link>
      </div>
      <div style={{ width: "200px", height: "200px", border: "1px solid black" }}>
        This is MAP
      </div>
      <div style={{ width: "200px", height: "100px", border: "1px solid black" }}>
        This is Recently Parked Locations Component
      </div>
      <div>
        <Link to='/dashboard/locations'>
          <button>
            Search for parking locations
          </button>
        </Link>
      </div>
    </div>
  )
}
