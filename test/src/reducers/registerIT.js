import {
  GET_IT_REGISTER,
  ADD_IT_REGISTER,
  DELETE_IT_REGISTER,
} from "../actions/types";

const intialState = {
  itregisters: [],
};

export default function (state = intialState, action) {
  switch (action.type) {
    case GET_IT_REGISTER:
      return {
        ...state,
        itregisters: action.payload,
      };

    case DELETE_IT_REGISTER:
      return {
        ...state,
        itregisters: state.itregisters.filter(
          (itregister) => itregister.id !== action.payload
        ),
      };
    case ADD_IT_REGISTER:
      return {
        ...state,
        itregisters: [...state.itregisters, action.payload],
      };

    default:
      return state;
  }
}
