import axios from 'axios'

export const Axios = axios.create({
  baseURL: 'https://dummyjson.com/',
  headers: {
    accept: 'application/json',
  },
})
