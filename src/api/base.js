import axios from 'axios'

export const server = axios.create({ baseURL: 'http://localhost:8080' })

const extractApiData = apiResponse => {
  return apiResponse ? apiResponse.data : ""
}

class ApiHelper {
  postJsonData = (url, requestData) => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    return server.post(url, requestData, config)
      .catch((thrown) => {
        if (axios.isCancel(thrown)) {
          console.log('request canceled', thrown.message)
        } else {
          throw thrown
        }
      })
      .then((apiResponse) => extractApiData(apiResponse))
  }

  get = (url, requestData) => {
    return server.get(url, requestData)
      .catch((thrown) => {
        if (axios.isCancel(thrown)) {
          console.log('request canceled', thrown.message)
        } else {
          throw thrown
        }
      })
      .then((apiResponse) => extractApiData(apiResponse))
  }

  putJsonData = (url, requestData) => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    return server.put(url, requestData, config)
      .catch((thrown) => {
        if (axios.isCancel(thrown)) {
          console.log('request canceled', thrown.message)
        } else {
          throw thrown
        }
      })
      .then((apiResponse) => extractApiData(apiResponse))
  }

  delete = (url, requestData) => {
    return server.delete(url, requestData)
      .catch((thrown) => {
        if (axios.isCancel(thrown)) {
          console.log('request canceled', thrown.message)
        } else {
          throw thrown
        }
      })
      .then((apiResponse) => extractApiData(apiResponse))
  }
}

export const helper = new ApiHelper()
