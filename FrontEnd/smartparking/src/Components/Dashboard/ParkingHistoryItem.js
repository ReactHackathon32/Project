import React from 'react'

export const ParkingHistoryItem = ({ parkingId, carparkName, basePrice, startTime, endTime, chargePrice }) => {

    function millisToMinutesAndSeconds(millis) {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }

    let start = new Date(startTime)
    let end = new Date(endTime)
    let difference = end.getTime() - start.getTime()
    let durationParked = millisToMinutesAndSeconds(difference)

    return (
        <div>
            <p>Carpark Name: {carparkName}</p>
            <p>Base Price : {basePrice}</p>
            <p>Parking Duration: {durationParked} minutes</p>
            <p>Total cost of parking: {chargePrice}</p>
        </div>
    )
}
