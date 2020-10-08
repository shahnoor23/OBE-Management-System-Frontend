import {
  GET_TE_REGISTER,
  ADD_TE_REGISTER,
  DELETE_TE_REGISTER,
} from "../actions/types";

const intialState = {
  teregisters: [],
};

export default function (state = intialState, action) {
  switch (action.type) {
    case GET_TE_REGISTER:
      return {
        ...state,
        teregisters: action.payload,
      };

    case DELETE_TE_REGISTER:
      return {
        ...state,
        teregisters: state.teregisters.filter(
          (teregister) => teregister.id !== action.payload
        ),
      };
    case ADD_TE_REGISTER:
      return {
        ...state,
        teregisters: [...state.teregisters, action.payload],
      };

    default:
      return state;
  }
}
