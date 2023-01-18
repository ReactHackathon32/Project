import React from 'react'
import { RecentParkingItem } from './RecentParkingItem'
import dummyCarparks from '../../Datas/Carpark'
import { Row, Col } from 'react-bootstrap'
import {AiFillCar} from "react-icons/ai"
// const dummyRecents = [
//     {
//         "carparkId": "123",
//         "dynamicPrice": "4.20",
//         "location": "east",
//         "duration": "30", // in minutes?
//     },
//     {
//         "carparkId": "233",
//         "dynamicPrice": "3.90",
//         "location": "south",
//         "duration": "75", // in minutes?
//     },
//     {
//         "carparkId": "333",
//         "dynamicPrice": "4.10",
//         "location": "west",
//         "duration": "65", // in minutes?
//     },
// ]

// TODO-Zin --> Farhan : dataStructure for recent parkings
// TODO-Zin : Change props for "price parked at" and add in "current price"

export const RecentParkingDisplay = (props) => {
    return (
        <div>
            <div>
                <big><AiFillCar /></big> Recently Parked
            </div>
            <Row>
            <Col></Col>
            {
                dummyCarparks.map(recent => (
                    <Col >
                    <RecentParkingItem
                        key={recent.carparkId}
                        id={recent.carparkId}
                        price={recent.dynamicPrice}
                        location={recent.carparkName}
                        avail={recent.availableLots}
                    />
                    </Col>
                ))
            }
            <Col></Col>
      </Row>
            
        </div>
    )
}
