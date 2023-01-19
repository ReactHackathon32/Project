import axios from 'axios'

export const startParking = (carparkId, userId, token) => {
    const startDetails = { "carparkId": carparkId, "userId": userId }
    return axios.post(`https://smart-parking-app.herokuapp.com/parking/start?token=${token}`, startDetails)
}
