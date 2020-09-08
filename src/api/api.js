import axios from "axios"
import { Cookies } from "react-cookie"

import { getAuthToken } from "../tools/session-info"
import { getAgency } from "../tools/agency-info"

let cookies = new Cookies()

export default class Api {
  // Constructor gets run every time a new instance of Api() or any of it's children are instantiated
  constructor() {
    axios.defaults.baseURL = `https://connect.yourwoo.com/${getAgency()}/api/v1` //set base URL for Api calls
    let authToken = getAuthToken()
    if (authToken) {
      this.setAuthHeader(authToken)
    } else console.log("Auth token not set - please log in")
  }

  logout() {
    cookies.remove("authToken")
    delete axios.defaults.headers.common.Authorization
  }

  setAuthHeader(authToken) {
    if (!axios.defaults.headers.common.Authorization) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${authToken}` // Sets authToken as a default header for all future axios calls
    }
  }

  getData(result) {
    return result.data
  }

  getAxios() {
    return axios
  }

  getAxiosV2() {
    return axios.create({
      baseURL: `https://connect.yourwoo.com/${getAgency()}/api/v2`,
    })
  }

  handleError(message, error) {
    let response = error.response
    if (response) {
      console.error("Error with code: " + response.status)
      console.error(message)
      //Conflict error
      if (response.status === 409) {
        throw response.data
      }
      //Unauthorized - log user out
      else if (response.status === 401) {
        console.error("Unauthorized - please log in again")
      }
      //Server error
      else if (response.status === 500) {
        console.error(
          "There has been an error on the server - please reload the page and if the problem persists contact the system administrator."
        )
      } else if (response.status === 404) {
        console.error("Database entry not found.", message)
      }
    } else {
      console.error(message)
      console.error(error)
    }
    throw error
  }
}
