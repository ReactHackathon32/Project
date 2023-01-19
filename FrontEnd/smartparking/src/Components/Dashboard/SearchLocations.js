import React, { useEffect, useState } from "react";
import { SearchLocationsResults } from "./SearchLocationsResults";
import { RecentParkingDisplay } from "./RecentParkingDisplay";
import { Container, Row } from "react-bootstrap";
import { getCarparks } from '../../API/getCarparks'

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
      {isLoading ? <div>Page is Loading</div> :
        <Container>
          <Row className="justify-content-md-center">
            <input
              className="rounded-pill py-2 my-1"
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
            <h1 className="my-5">Favourites go here</h1>
          </Row>
        </Container>}
    </>

  );
};
