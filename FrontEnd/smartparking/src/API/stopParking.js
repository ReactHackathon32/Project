import axios from 'axios'

export const stopParking = (userId, token) => {
    return axios.post(`https://smart-parking-app.herokuapp.com/parking/end/${userId}?token=${token}`)
}
