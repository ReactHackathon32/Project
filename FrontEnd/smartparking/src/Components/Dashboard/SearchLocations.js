import React, { useState } from "react";
import dummyCarparks from "../../Datas/Carpark";
import { SearchLocationsResults } from "./SearchLocationsResults";
import { RecentParkingDisplay } from "./RecentParkingDisplay";
import { Container, Row } from "react-bootstrap";

export const SearchLocations = () => {
  const [input, setInput] = useState();
  const [searchResult, setSearchResult] = useState([]);
  console.log("searchInput", input);
  console.log("searchResult", searchResult);

  function searchHandler(e) {
    let searchInput = e.target.value;
    setInput(searchInput);
    searchInput.length > 0
      ? setSearchResult(
          dummyCarparks.filter((carpark) =>
            carpark.carparkName
              .toLowerCase()
              .includes(searchInput.toLowerCase())
          )
        )
      : setSearchResult([]);
  }
  return (
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
    </Container>
  );
};
