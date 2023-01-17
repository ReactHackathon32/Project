const ongoingParking = {
  parkingId: "389d68ef-b74c-45c5-ac0e-2ed1bcd13485",
  user: {
    userId: "47e901ff-6f6a-41da-974e-2ffca67f1917",
    email: "user@user.com",
    password: "password",
    firstName: "User",
    lastName: "McUserFace",
    ongoingParking: null,
  },
  carpark: {
    carparkId: "351f3185-8b09-432f-9ba8-03c2a6ac7013",
    basePrice: 3.6,
    dynamicPrice: 4.2,
    totalLots: 300,
    availableLots: 28,
  },
  startTime: "2023-01-17T14:41:18.7045218",
  pricedTime: "2023-01-17T14:41:18.7045218",
  price: 0.0,
};

//pricedTime can be ignored by frontend
//price here refers to current total parking cost since start of parking.
//If user were to leave carpark now, this price is the amount he will be charged
//user and carpark fields are returning the respective JSON objects
