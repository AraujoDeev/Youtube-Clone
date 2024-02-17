import axios from 'axios'

const API = axios.create({
  baseURL: 'http://localhost:8080/',
})

API.interceptors.request.use(function (config) {
  const user = localStorage.getItem('u')

  if (user) {
    config.headers.Authorization = `Bearer ${JSON.parse(user).token}`
  }

  return config
})

export default API
