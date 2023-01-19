import axios from 'axios'

export const postRegister = (email, password, confirmPassword, firstName, lastName) => {
    const registerDetails = { "email": email, "firstName": firstName, "lastName": lastName, "password": password, "confirmPassword": confirmPassword }
    return axios.post("https://smart-parking-app.herokuapp.com/user/register", registerDetails)
}
