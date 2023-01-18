import React from 'react'

export const ParkingHistoryItem = ({ parkingId, userId, carparkId, price }) => {
    return (
        <div>
            <p>Parking Id: {parkingId}</p>
            <p>User Id: {userId}</p>
            <p>carparkId: {carparkId}</p>
            <p>Price: {price}</p>
        </div>
    )
}