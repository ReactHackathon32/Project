import React from "react";
import Carpark from "../../Datas/Carpark";

export class NewParking extends Carpark {
  render() {
    return (
      <div>
        <Carpark />
        {this.props.dummyCarpark.map((carparkId) => (
          <div className="dummyCarpark">{carparkId}</div>
        ))}
      </div>
    );
  }
}

export default NewParking;
