import {
  GET_CH_REGISTER,
  ADD_CH_REGISTER,
  DELETE_CH_REGISTER,
} from "../actions/types";

const intialState = {
  chregisters: [],
};

export default function (state = intialState, action) {
  switch (action.type) {
    case GET_CH_REGISTER:
      return {
        ...state,
        chregisters: action.payload,
      };

    case DELETE_CH_REGISTER:
      return {
        ...state,
        chregisters: state.chregisters.filter(
          (chregister) => chregister.id !== action.payload
        ),
      };
    case ADD_CH_REGISTER:
      return {
        ...state,
        chregisters: [...state.chregisters, action.payload],
      };

    default:
      return state;
  }
}
