import React from 'react'
import { Link } from 'react-router-dom'
import { RecentParkingDisplay } from './RecentParkingDisplay'

export const MainDashboard = () => {
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
      <div style={{ width: "500px", height: "200px", border: "1px solid black" }}>
        This is MAP
      </div>
      <div style={{ width: "500px", height: "auto", border: "1px solid black" }}>
        <RecentParkingDisplay />
      </div>
      <div>
        <Link to='/dashboard/search'>
          <button>
            Search for parking locations
          </button>
        </Link>
      </div>
    </div>
  )
}
