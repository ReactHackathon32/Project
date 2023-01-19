import React from 'react'
import { Link } from 'react-router-dom'
import { MdLocationOn } from "react-icons/md"

export const RecentParkingItem = ({ id, price, location, avail }) => {

    return (
        <div className='circle text-center animation-hover'>
            <Link to="/dashboard/newParking" style={{ textDecoration: 'none', color: 'black' }} state={{ carpark: id }}>
                <div style={{fontSize: "38px", color: 'black'}}><MdLocationOn /></div>
                <p className='recent-parking-item mt-3'>{location}</p>
            </Link>
        </div>
    )
}
