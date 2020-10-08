import axios from "axios";
import { GET_STUDENTS } from "./types";
import { tokenConfig } from "./auth";
export const getStudents = () => (dispatch, getState) => {
  //asy request with axios we are making here
  axios
    .get("http://127.0.0.1:8000/api/stu-teacher/", tokenConfig(getState))
    .then((res) => {
      console.log(res);
      dispatch({
        type: GET_STUDENTS, //in action we are passing type action.type
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
