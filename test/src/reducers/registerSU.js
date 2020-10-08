import {
  GET_SU_REGISTER,
  ADD_SU_REGISTER,
  DELETE_SU_REGISTER,
} from "../actions/types";

const intialState = {
  suregisters: [],
  students: [],
};

export default function (state = intialState, action) {
  switch (action.type) {
    case GET_SU_REGISTER:
      return {
        ...state,
        suregisters: action.payload,
      };

    case DELETE_SU_REGISTER:
      return {
        ...state,
        suregisters: state.suregisters.filter(
          (suregister) => suregister.id !== action.payload
        ),
      };
    case ADD_SU_REGISTER:
      return {
        ...state,
        suregisters: [...state.suregisters, action.payload],
      };

    default:
      return state;
  }
}
