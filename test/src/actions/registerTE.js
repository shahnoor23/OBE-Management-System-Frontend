import axios from "axios";
import { GET_TE_REGISTER, ADD_TE_REGISTER, DELETE_TE_REGISTER } from "./types";
import { tokenConfig } from "./auth";
export const getTERegisters = () => (dispatch, getState) => {
  //asy request with axios we are making here
  console.log(getState);
  axios
    .get("http://127.0.0.1:8000/api/teacher/", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_TE_REGISTER, //in action we are passing type action.type
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
//delete Register
export const deleteTERegisters = (id) => (dispatch, getState) => {
  axios
    .delete("http://localhost:8000/api/teacher/" + id, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: DELETE_TE_REGISTER,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};
//ADD Register
export const addTERegister = (teregister) => (dispatch, getState) => {
  axios
    .post(
      "http://127.0.0.1:8000/api/teacher/",
      teregister,
      tokenConfig(getState)
    )
    .then((res) => {
      dispatch({
        type: ADD_TE_REGISTER,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
