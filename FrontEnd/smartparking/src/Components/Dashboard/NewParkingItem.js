import React, { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { getCurrentParking } from "../../API/getCurrentParking";
import { startParking } from "../../API/startParking";
import { stopParking } from "../../API/stopParking";
import { UserContext } from "../../App";
import LoadingSpinner from "../../Layouts/LoadingSpinner";
import CurrentParkingOverlay from "./CurrentParkingOverlay";
import Timer from "./Timer";

export const NewParkingItem = ({ id, name, dynamicPrice, avail }) => {
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
  const [startResp, setStartResp] = useState();
  const [stopResp, setStopResp] = useState();
  const [isParking, setIsParking] = useState();
  const [loadingCur, setLoadingCur] = useState(false);
  const [curParking, setCurParking] = useState();
  const [totalCost, setTotalCost] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [timer, setTimer] = useState(false);

  const contextData = useContext(UserContext);

  useEffect(() => {
    if (localStorage.getItem("isParking") === "false") setIsParking(false);
    if (localStorage.getItem("isParking") === "true") setIsParking(true);
    const intervalId = setInterval(() => {
      getCurrentParking(userId, token)
        .then((response) => {
          console.log("getCurParking:", response.data);
          setCurParking(response.data);
          setTotalCost(response.data.price);
          contextData.setCurCarparkObj(response.data);
        })
        .catch((error) => {
          console.log("Error fetching current parking data:", error);
        })
        .finally(() => {
          setLoadingCur(false);
        });
    }, 120000);

    return () => clearInterval(intervalId);
  }, [isParking]);

  function startHandler() {
    setIsLoading(true);
    startParking(id, userId, token)
      .then((response) => {
        setTimer(true);
        console.log("startParking:", response.data);
        setStartResp(response.data);
        setIsParking(true);
        contextData.setParking(true);
        localStorage.setItem("isParking", true);
        localStorage.setItem("curCarparkObj", curParking);
      })
      .catch((error) => {
        console.log("Error fetching start data:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function stopHandler() {
    setIsLoading(true);
    stopParking(userId, token)
      .then((response) => {
        setTimer(false);
        console.log("stopParking:", response.data);
        setStartResp(response.data);
        setIsParking(false);
        contextData.setParking(false);
        localStorage.setItem("isParking", false);
        localStorage.setItem("curCarparkObj");
        contextData.setCurCarparkObj();
      })
      .catch((error) => {
        console.log("Error fetching stop data:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
    console.log("stopResponse:", stopResp);
  }
  return (
    <>
      <h2 className="text-center mt-5 mb-4">NEW PARKING DETAILS</h2>
      <div className="map-image"></div>
      <h4 className="text-center mt-5 mb-3">Dynamic Pricing</h4>
      <div className="d-flex justify-content-center">
        {loadingCur ? (
          <div>Loading...</div>
        ) : (
          <div
            className="d-flex justify-content-center rounded align-items-center"
            style={{ backgroundColor: "white", width: "300px", height: "80px" }}
          >
            <div className="pe-4">
              Total cost
              <br />
              {isParking ? totalCost > 0 ? totalCost : 0 : <>-</>}
            </div>
            <div
              style={{
                float: "left",
                height: "70px",
                width: "2px",
                backgroundColor: "black",
              }}
            ></div>
            <div className="ps-4">
              Current Price
              <br />
              {dynamicPrice}
            </div>
          </div>
        )}
      </div>
      <div className="text-center my-5">
        <h3>Carpark Name: {name}</h3>
        <h5>Available Lots: {avail}</h5>
        {isParking ? (
          <></>
        ) : (
          <h5 className="text-muted">Current Price: $ {dynamicPrice} /hr </h5>
        )}
        {isParking ? (
          isLoading ? (
            <LoadingSpinner />
          ) : (
            <Button variant="dark" onClick={stopHandler}>
              Stop Parking
            </Button>
          )
        ) : isLoading ? (
          <LoadingSpinner />
        ) : (
          <Button variant="dark" onClick={startHandler}>
            Park Here
          </Button>
        )}
      </div>
      <div></div>
    </>
  );
};
