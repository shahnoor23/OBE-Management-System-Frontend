import axios from "axios";
import { GET_TEACHERS } from "./types";
import { tokenConfig } from "./auth";
export const getTeachers = () => (dispatch, getState) => {
  //asy request with axios we are making here
  axios
    .get("http://127.0.0.1:8000/api/te-chairman/", tokenConfig(getState))
    .then((res) => {
      console.log(res);
      dispatch({
        type: GET_TEACHERS, //in action we are passing type action.type
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
