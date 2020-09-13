import { useReducer } from "react";
import axios from "axios";

const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_INIT":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case "FETCH_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      throw new Error();
  }
};

const useApi = (method) => {
  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: null,
  });

  axios.defaults.baseURL = "https://code-portfolio-f44c5.firebaseio.com";

  const fetchData = async (url, data = null) => {
    dispatch({ type: "FETCH_INIT" });

    try {
      const result = await axios[method](url, data);
      dispatch({ type: "FETCH_SUCCESS", payload: result.data });
    } catch (error) {
      console.log(error);
      dispatch({ type: "FETCH_FAILURE" });
    }
  };
  return [state, fetchData];
};

export default useApi;
