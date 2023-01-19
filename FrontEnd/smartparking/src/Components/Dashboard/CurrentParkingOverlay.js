import React, { useContext, useEffect, useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom'
import { UserContext } from '../../App';
import Timer from './Timer';

const CurrentParkingOverlay = ({ isShowing }) => {
    const contextData = useContext(UserContext)
    const curCarparkObj = contextData.curCarparkObj
    console.log("Overlay Carpark:", curCarparkObj);
    return (
        <>
            <Offcanvas show={isShowing} placement={"bottom"} scroll={true} backdrop={false} style={{ height: "50px" }}>
                <Offcanvas.Body className='py-0 my-0' style={{ height: "40px" }}>
                    <Link to="/dashboard/newParking" className='link link-primary pt-0 mt-1 d-flex justify-content-between' state={{ carparkId: curCarparkObj?.carpark?.carparkId }}>
                        <p>Carpark: {curCarparkObj?.carpark?.carparkName}</p>
                        <p>{isShowing ? (<Timer />) : null}</p>
                        <p>Total Cost: {curCarparkObj?.price}</p>
                    </Link>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default CurrentParkingOverlay

