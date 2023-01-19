import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router";
import { getCarparks } from "../../API/getCarparks";
import LoadingSpinner from "../../Layouts/LoadingSpinner";
import { NewParkingItem } from "./NewParkingItem";

export const NewParkingDisplay = () => {
  const [carparks, setCarparks] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [curCarparkId, setCurCarparkId] = useState()

  const location = useLocation()

  useEffect(() => {
    setCurCarparkId(location.state.carparkId)
    getCarparks()
      .then(response => {
        setCarparks(response.data)
      })
      .catch(error => {
        console.log("Error fetching data: ", error);
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  return (
    <>
      {isLoading ? <div className="text-center" style={{ marginLeft: 'auto', marginRight: 'auto', paddingTop: '300px' }}>
        <LoadingSpinner />
        <h2>
          Retrieving information for New Parking Details...
        </h2>
      </div> :
        (
          carparks.map(carpark => {
            if (carpark.carparkId == curCarparkId) {
              return (<Container>
                <NewParkingItem
                  key={carpark.carparkId}
                  id={carpark.carparkId}
                  name={carpark.carparkName}
                  dynamicPrice={carpark.dynamicPrice}
                  avail={carpark.availableLots}
                />
              </Container>)
            }
          })
        )}
    </>

  )
}
