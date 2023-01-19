import React from "react";
import { Link } from "react-router-dom";
import "./SearchBar.css";

export const SearchLocationsResults = ({ isMatch }) => {
    return (
        <div className="searchResults mb-5" style={{marginTop: '-48px'}}>
            {isMatch.map((carpark, i) => (
                <Link 
                    className="link link-primary"
                    key={i}
                    to="/dashboard/newParking"
                    state={{ carpark: carpark.carparkId }}
                >
                    <div className="searchItem">
                        <p style={{color: 'black'}}>Name: {carpark.carparkName}</p>
                        <p style={{color: 'black'}}>(Available lots: {carpark.availableLots})</p>
                    </div>
                </Link>
            ))}
        </div>
    );
};
