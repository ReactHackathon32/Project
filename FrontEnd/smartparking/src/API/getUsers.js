import axios from 'axios'

export const getUsers = async (setData, setError, setLoading) => {
    await axios()
        .then((response) => {
            setData(response.data)
        })
        .catch(error => {
            console.log("Error fetching data: ", error);
            setError(error)
        })
        .finally(() => {
            setLoading(false)
        })

}

// {
//     userId: "630ae7c8-6749-4349-a4c5-849035acd305",
//     email: "user@user.com",
//     password: "password",
//     firstName: "User",
//     lastName: "McUserFace",
//     ongoingParking: {}, // or null
//   },