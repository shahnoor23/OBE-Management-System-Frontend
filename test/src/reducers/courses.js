import {
  GET_COURSESASSIGNED,
  DELETE_COURSESASSIGNED,
  ADD_COURSESASSIGNED,
} from "../actions/types";

const intialState = {
  courses: [],
};

export default function (state = intialState, action) {
  switch (action.type) {
    case GET_COURSESASSIGNED:
      return {
        ...state,
        courses: action.payload,
      };

    case DELETE_COURSESASSIGNED:
      return {
        ...state,
        courses: state.courses.filter((course) => course.id !== action.payload),
      };
    case ADD_COURSESASSIGNED:
      return {
        ...state,
        courses: [...state.courses, action.payload],
      };

    default:
      return state;
  }
}
