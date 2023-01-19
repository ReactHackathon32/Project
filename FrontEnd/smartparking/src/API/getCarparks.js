import axios from 'axios'

export const getCarparks = () => {
    return axios(`https://smart-parking-app.herokuapp.com/carpark`)
}
