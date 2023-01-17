import React, { useState } from 'react'
import dummyCarparks from '../../Datas/Carpark'
import { SearchLocationsResults } from './SearchLocationsResults'

export const SearchLocations = () => {
    const [input, setInput] = useState()
    const [searchResult, setSearchResult] = useState([])
    console.log("searchInput", input);
    console.log("searchResult", searchResult);

    function searchHandler(e) {
        let searchInput = e.target.value
        setInput(searchInput)
        searchInput.length > 0 ? setSearchResult(dummyCarparks.filter(carpark => carpark.carparkName.toLowerCase().includes(searchInput.toLowerCase()))) : setSearchResult([])
    }
    return (
        <div>
            <input type="search" value={input || ''} onInput={searchHandler} />
            {searchResult.length > 0 ?
                <SearchLocationsResults isMatch={searchResult} /> :
                <p>Input search field</p>
            }
        </div>
    )
}
