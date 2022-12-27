import axios from 'axios'

export default axios.create({
  baseURL: '/db',
  headers: {
    'Content-type': 'application/json',
  },
})
