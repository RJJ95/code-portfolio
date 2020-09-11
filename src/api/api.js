import axios from "axios";

export default function getAxios() {
  axios.defaults.baseURL = "https://code-portfolio-f44c5.firebaseio.com/";

  return axios;
}
