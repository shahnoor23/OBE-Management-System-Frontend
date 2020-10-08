import { combineReducers } from "redux";
import visions from "./visions";
import clos from "./clos";
import plos from "./plos";
import subjects from "./subjects";
import peos from "./peos";
import missions from "./missions";
import auth from "./auth";
import peo_visions from "./peo_vision";
import peomissions from "./peomission";
import cognitives from "./chairman_framework_reducers/cognitive";
import affectives from "./chairman_framework_reducers/affectives";
import psychomotors from "./chairman_framework_reducers/psychomotors";
import assignedsubjects from "./teacher_framework_reducers/viewassignedsubjects";
import assignments from "./teacher_framework_reducers/assignements";
import viewassignments from "./Student_Framework/assignments";
import chregisters from "./registerCh";
import itregisters from "./registerIT";
import teregisters from "./registerTE";
import suregisters from "./registerSU";
import students from "./students";
import courses from "./courses";
import teachers from "./teachers";
export default combineReducers({
  teachers,
  courses,
  chregisters,
  itregisters,
  teregisters,
  suregisters,
  students,
  peomissions,
  peo_visions,
  visions,
  clos,
  plos,
  subjects,
  peos,
  missions,
  cognitives,
  psychomotors,
  affectives,
  assignedsubjects,
  assignments,
  viewassignments,
  auth,
});
