import axios from "axios";
import { GET_IT_REGISTER, ADD_IT_REGISTER, DELETE_IT_REGISTER } from "./types";
import { tokenConfig } from "./auth";
export const getITRegisters = () => (dispatch, getState) => {
  //asy request with axios we are making here
  console.log(getState);
  axios
    .get("http://127.0.0.1:8000/api/department/", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_IT_REGISTER, //in action we are passing type action.type
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
//delete Register
export const deleteITRegisters = (id) => (dispatch, getState) => {
  axios
    .delete("http://localhost:8000/api/department/" + id, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: DELETE_IT_REGISTER,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};
//ADD Register
export const addITRegister = (itregister) => (dispatch, getState) => {
  axios
    .post(
      "http://127.0.0.1:8000/api/department/",
      itregister,
      tokenConfig(getState)
    )
    .then((res) => {
      dispatch({
        type: ADD_IT_REGISTER,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
