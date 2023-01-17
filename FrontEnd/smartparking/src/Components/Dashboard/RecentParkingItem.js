import React from 'react'
import { Link } from 'react-router-dom'

export const RecentParkingItem = ({ id, price, location, avail }) => {

    return (
        <div>
            <Link to="/dashboard/newParking" state={{ carpark: id }}>
                <p>Parked at {location} for {price}, avail ({avail}) slots</p>
            </Link>
        </div>
    )
}
