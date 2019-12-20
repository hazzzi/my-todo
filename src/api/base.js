import axios from 'axios'

export const server = axios.create({ baseURL: 'http://localhost:8080' })

class ApiHelper {
  postJsonData = (url, requestData) => server.post(url, requestData)
    .catch((thrown) => {
      if (axios.isCancel(thrown)) {
        console.log('request canceled', thrown.message)
      } else {
        throw thrown
      }
    })
    .then((apiResponse) => apiResponse)
}

export const helper = new ApiHelper()