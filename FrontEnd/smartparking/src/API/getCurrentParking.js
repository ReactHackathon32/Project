import axios from 'axios'

export const getCurrentParking = (userId, token) => {
    return axios(`https://smart-parking-app.herokuapp.com/parking/current/${userId}?token=${token}`)
}
