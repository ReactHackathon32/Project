import axios from 'axios'

export const getHistory = (token, userId) => {
    return axios(`https://smart-parking-app.herokuapp.com/parking/complete/${userId}?token=${token}`)
}

