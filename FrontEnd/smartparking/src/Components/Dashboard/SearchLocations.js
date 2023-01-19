import React, { useEffect, useState } from "react";
import { SearchLocationsResults } from "./SearchLocationsResults";
import { RecentParkingDisplay } from "./RecentParkingDisplay";
import { Container, Row } from "react-bootstrap";
import { getCarparks } from '../../API/getCarparks'
import { RxMagnifyingGlass } from 'react-icons/rx'

export const SearchLocations = () => {
  const [input, setInput] = useState();
  const [searchResult, setSearchResult] = useState([]);
  const [carparks, setCarparks] = useState()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getCarparks()
      .then(response => {
        setCarparks(response.data)
      })
      .catch(error => {
        console.log(error.message);
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  function searchHandler(e) {
    let searchInput = e.target.value;
    setInput(searchInput);
    searchInput.length > 0
      ? setSearchResult(
        carparks.filter((carpark) =>
          carpark.carparkName
            .toLowerCase()
            .includes(searchInput.toLowerCase())
        )
      )
      : setSearchResult([]);
  }
  return (
    <>
      {isLoading ? <div className="text-center" style={{marginLeft: 'auto', marginRight: 'auto', paddingTop: '300px'}}>
        <h2>
          Retrieving information for Search Parking...
        </h2>
        </div>  :
        <Container>
          <h2 className="text-center mt-5 mb-4"><big><RxMagnifyingGlass /></big> Search Parking Locations</h2>
          <Row className="justify-content-md-center">
            <input
              className="rounded-pill py-2 mb-5"
              placeholder="Search for Carparks"
              type="search"
              value={input || ""}
              onInput={searchHandler}
            />
            {searchResult.length > 0 ? (
              <SearchLocationsResults isMatch={searchResult} />
            ) : (
              <p></p>
            )}
            <RecentParkingDisplay></RecentParkingDisplay>
            <h3 className="my-5 text-center">(Favourites go here)</h3>
          </Row>
        </Container>}
    </>

  );
};
