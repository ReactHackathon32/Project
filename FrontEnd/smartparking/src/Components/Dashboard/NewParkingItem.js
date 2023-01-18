import React from 'react'

export const NewParkingItem = ({ id, name, dynamicPrice, avail }) => {
    return (
        <div>
            <h1>Carpark Name: {name}</h1>
            <h3>Current Price: {dynamicPrice}</h3>
            <p>Available Slots: {avail}</p>
            <p>This is recent peaks graph placeholder</p>
            <button>Park Here</button>
        </div>
    )
}
