export const dummyOngoingParking = [
  {
    parkingId: "1",
    user: "1",
    carpark: "1",
    startTime: "",
    pricedTime: "",
    price: "3.20",
  },
  {
    parkingId: "2",
    user: "2",
    carpark: "2",
    startTime: "",
    pricedTime: "",
    price: "3.40",
  },
  {
    parkingId: "3",
    user: "3",
    carpark: "3",
    startTime: "",
    pricedTime: "",
    price: "3.50",
  },
];

//will confirm format of timestring
//pricedTime can be ignored by frontend
//price here refers to current total parking cost since start of parking.
//If user were to leave carpark now, this price is the amount he will be charged
