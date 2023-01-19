import React from 'react'
import { Button } from 'react-bootstrap'
export const NewParkingItem = ({ id, name, dynamicPrice, avail }) => {
    return (
        <>
            <h3 className='text-center mt-5 mb-4'>NEW PARKING DETAILS</h3>
            <div className='map-image'></div>
            <h4 className="text-center mt-5 mb-3">Dynamic Pricing</h4>
            <div className='d-flex justify-content-center'>

                <div className="d-flex justify-content-center rounded align-items-center" style={{backgroundColor: 'white', width: "300px", height: "150px"}}>
                    <div className=''>
                        
                    
                    </div>
                    <div>

                    </div>
                    
                </div>
            </div>
            {/* <Button className='me-2' variant='dark'>Ends At<br />(TIME)</Button>
                    <Button className='ms-2' variant='outline-dark'>Cost<br />(PRICE)</Button> */}
                
            <h1>Carpark Name: {name}</h1>
            <h3>Current Price: {dynamicPrice}</h3>
            <p>Available Slots: {avail}</p>
            <p>This is recent peaks graph placeholder</p>
            <button>Park Here</button>
        </>
    )
}
