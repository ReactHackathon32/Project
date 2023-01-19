import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router";
import { getCarparks } from "../../API/getCarparks";
import dummyCarparks from "../../Datas/Carpark";
import { NewParkingItem } from "./NewParkingItem";

export const NewParkingDisplay = () => {
  const [carparks, setCarparks] = useState()
  const [isLoading, setIsLoading] = useState(true)

  const location = useLocation()
  let curCarparkId = location.state.carparkId

  useEffect(() => {
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

  console.log("All Carparks:", carparks);
  console.log("curCarparkId:", curCarparkId);

  return (
    <>
      {isLoading ? <p>Loading......</p> :
        (
          carparks.map(carpark => {
            if (carpark.carparkId == curCarparkId) {
              return (<Container>
                <NewParkingItem
                  key={carpark.carparkId}
                  id={carpark.id}
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
