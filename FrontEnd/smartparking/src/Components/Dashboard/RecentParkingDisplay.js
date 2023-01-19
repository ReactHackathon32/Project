import React, { useEffect, useState } from 'react'
import { RecentParkingItem } from './RecentParkingItem'
import dummyCarparks from '../../Datas/Carpark'
import { Row, Col } from 'react-bootstrap'
import { AiFillCar } from "react-icons/ai"
import { getHistory } from '../../API/getHistory'
import LoadingSpinner from '../../Layouts/LoadingSpinner'

export const RecentParkingDisplay = () => {
    const [history, setHistory] = useState()
    // const [mostRecent, setMostRecent] = useState()
    const [isLoading, setIsLoading] = useState(true)

    const token = localStorage.getItem("token")
    const userId = localStorage.getItem("userId")

    useEffect(() => {
        getHistory(token, userId)
            .then((response) => {
                setHistory(response.data)
            })
            .catch(error => {
                console.log("Error fetching data: ", error);
            })
            .finally(() => setIsLoading(false))
    }, [])
    // console.log(history);
    return (
        <> {
            isLoading ? <div className="text-center" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                <LoadingSpinner />
                <h2>
                    Retrieving information for Recent Parkings...
                </h2>
            </div> : <div>
                <div>
                    <h3 className='mb-3 text-center'><big><AiFillCar /></big> Recently Parked</h3>
                </div>
                <Row>
                    <Col xs={12} lg={2}></Col>
                    {
                        history.slice(0, 4).map((recent) => (
                            <Col className='text-center'>
                                <RecentParkingItem
                                    key={recent.carpark.carparkId}
                                    id={recent.carpark.carparkId}
                                    name={recent.carpark.carparkName}
                                />
                            </Col>
                        ))
                    }
                    <Col xs={12} lg={2}></Col>
                </Row>
            </div>
        }</>
    )
}
