import React from 'react'
import { Button } from 'react-bootstrap'
export const NewParkingItem = ({ id, name, dynamicPrice, avail }) => {
    return (
        <>
            <div>New Parking Details</div>
            <div>map</div>
            <div>
                <div className="text-center pb-4">Dynamic Pricing</div>
                <div className="d-flex justify-content-center" >
                    <Button style={{ width: "100px" }}>Ends At Time</Button>
                    <Button style={{ width: "100px" }}>Cost Price</Button>
                </div>
            </div>
            <h1>Carpark Name: {name}</h1>
            <h3>Current Price: {dynamicPrice}</h3>
            <p>Available Slots: {avail}</p>
            <p>This is recent peaks graph placeholder</p>
            <button>Park Here</button>
        </>
    )
}
