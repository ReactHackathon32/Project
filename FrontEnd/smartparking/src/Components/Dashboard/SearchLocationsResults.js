import React from 'react'
import { Link } from 'react-router-dom'

export const SearchLocationsResults = ({ isMatch }) => {
    return (
        <div>
            {isMatch.map((carpark, i) => (
                <Link key={i} to="/dashboard/newParking" state={{ carpark: carpark.carparkId }}>
                    <div style={{ border: "1px solid black", width: "150px", padding: "10px" }}>
                        <p>Name: {carpark.carparkName}</p>
                        <p>Available lots: {carpark.availableLots}</p>
                    </div>
                </Link>

            ))}
        </div>
    )
}
