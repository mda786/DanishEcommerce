import axios from 'axios'

const BASE_URL='/api'


export const publicRequest=axios.create({
    baseURL:BASE_URL
})




export const userRequest = (token) => {
    return axios.create({
      baseURL: BASE_URL,
      headers: { Authorization: `Bearer ${token}` },
    });
  };