import axios from "axios";
import { GET_SU_REGISTER, ADD_SU_REGISTER, DELETE_SU_REGISTER } from "./types";
import { tokenConfig } from "./auth";
export const getSURegisters = () => (dispatch, getState) => {
  //asy request with axios we are making here
  console.log(getState);
  axios
    .get("http://127.0.0.1:8000/api/student/", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_SU_REGISTER, //in action we are passing type action.type
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
//delete Register
export const deleteSURegisters = (id) => (dispatch, getState) => {
  axios
    .delete("http://localhost:8000/api/student/" + id, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: DELETE_SU_REGISTER,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};
//ADD Register
export const addSURegister = (suregister) => (dispatch, getState) => {
  axios
    .post(
      "http://127.0.0.1:8000/api/student/",
      suregister,
      tokenConfig(getState)
    )
    .then((res) => {
      dispatch({
        type: ADD_SU_REGISTER,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
