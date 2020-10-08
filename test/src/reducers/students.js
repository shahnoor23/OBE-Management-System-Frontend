import { GET_STUDENTS } from "../actions/types";

const intialState = {
  students: [],
};

export default function (state = intialState, action) {
  switch (action.type) {
    case GET_STUDENTS:
      return {
        ...state,
        students: action.payload,
      };

    default:
      return state;
  }
}
