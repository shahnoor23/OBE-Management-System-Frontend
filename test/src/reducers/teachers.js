import { GET_TEACHERS } from "../actions/types";

const intialState = {
  teachers: [],
};

export default function (state = intialState, action) {
  switch (action.type) {
    case GET_TEACHERS:
      return {
        ...state,
        teachers: action.payload,
      };

    default:
      return state;
  }
}
