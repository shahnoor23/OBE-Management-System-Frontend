import axios from "axios";
import { GET_CH_REGISTER, ADD_CH_REGISTER, DELETE_CH_REGISTER } from "./types";
import { tokenConfig } from "./auth";
export const getCHRegisters = () => (dispatch, getState) => {
  //asy request with axios we are making here
  console.log(getState);
  axios
    .get("http://127.0.0.1:8000/api/chairman/", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_CH_REGISTER, //in action we are passing type action.type
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
//delete Register
export const deleteCHRegisters = (id) => (dispatch, getState) => {
  axios
    .delete("http://localhost:8000/api/chairman/" + id, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: DELETE_CH_REGISTER,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};
//ADD Register
export const addCHRegister = (chregister) => (dispatch, getState) => {
  axios
    .post(
      "http://127.0.0.1:8000/api/chairman/",
      chregister,
      tokenConfig(getState)
    )
    .then((res) => {
      dispatch({
        type: ADD_CH_REGISTER,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
