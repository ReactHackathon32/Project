import axios from 'axios'

export const postLogin = (email, password) => {
    const loginDetails = { "email": email, "password": password }
    return axios.post("https://smart-parking-app.herokuapp.com/user/login", loginDetails)
}
