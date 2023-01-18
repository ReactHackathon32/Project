import React from "react";
import dummyCarparks from "../../Datas/Carpark";
import ViewLocationItem from "./ViewLocationItem";

const ViewLocationDisplay = () => {
  return (
    <div>
      {dummyCarparks.map((dummyCarpark) => (
        <ViewLocationItem
          name={dummyCarpark.carparkName}
          basePrice={dummyCarpark.basePrice}
          dynamicPrice={dummyCarpark.dynamicPrice}
          totalLots={dummyCarpark.totalLots}
          availableLots={dummyCarpark.availableLots}
        />
      ))}
    </div>
  );
};

export default ViewLocationDisplay;
