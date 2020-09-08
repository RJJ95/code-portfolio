import axios from "axios";

export default class Api {
  constructor() {
    axios.defaults.baseURL = "https://code-portfolio-f44c5.firebaseio.com/";
  }

  getAxios() {
    return axios;
  }
}
