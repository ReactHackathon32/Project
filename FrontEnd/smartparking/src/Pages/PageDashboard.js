import React, { useState } from 'react'
// import { MainDashboard } from '../Components/Dashboard/MainDashboard'
// import { PageLocation } from './PageLocation'

console.log(dummyCarpark);
export const PageDashboard = () => {

    const [selectedLocation, setSelectedLocation] = useState()
    const [isSelected, setIsSelected] = useState(false)
    const [isSearch, setIsSearch] = useState(false)
    return <div>Testing</div>
    // (
    //     <div>
    //         <button onClick={() => setSelectedLocation({ locationFromDatabase }) setIsSelected(true)}>Yishun</button>
    //         {
    //     isSelected ?
    //         <PageLocation location={"yishun"} /> :
    //         <MainDashboard />
    // }
    // {
    //     isSearch ?
    //         <PageLocation location={"yishun"} /> :
    //         <MainDashboard />
    // }
    //     </div >
    // )
}
