import axios from "axios";
import {
  GET_COURSESASSIGNED,
  DELETE_COURSESASSIGNED,
  ADD_COURSESASSIGNED,
} from "./types";
import { tokenConfig } from "./auth";
export const getAC = () => (dispatch, getState) => {
  //asy request with axios we are making here
  console.log(getState);
  axios
    .get("http://127.0.0.1:8000/api/coursesassign/", tokenConfig(getState))
    .then((res) => {
      console.log(res);
      dispatch({
        type: GET_COURSESASSIGNED, //in action we are passing type action.type
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
//delete plo
export const deleteAC = (id) => (dispatch, getState) => {
  axios
    .delete(
      "http://localhost:8000/api/coursesassign/" + id,
      tokenConfig(getState)
    )
    .then((res) => {
      dispatch({
        type: DELETE_COURSESASSIGNED,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};
//ADD plo
export const addAC = (ac) => (dispatch, getState) => {
  axios
    .post("http://127.0.0.1:8000/api/coursesassign/", ac, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: ADD_COURSESASSIGNED,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
