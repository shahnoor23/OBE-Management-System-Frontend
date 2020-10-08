import React, { Component } from "react";
import Select from "react-select";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addSubject } from "../../actions/subjects";
import { getClos } from "../../actions/clos";
import { withRouter } from "react-router-dom";
import { Table } from "reactstrap";
import { tokenConfig } from "../../actions/auth";
import * as actions from "../../actions/teacher_framework_actions/assignment";

import * as studentactions from "../../actions/students";

export class Courses extends Component {
  //to part of component thats why we create state down there
  state = {
    student_name: [],
    assignment: [],
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
  };

  componentDidMount() {
    this.props.ongetAssignement();
    this.props.ongetStudents();
  }

  render() {
    console.log(this.props.students);
    const { assignment, student_name } = this.state;
    let opt = [];
    let optass = [];

    if (this.props.students.length > 0) {
      for (let i in this.props.students) {
        opt.push({
          value: this.props.students[i].id,
          label: this.props.students[i].email,
        });
      }
    }

    if (this.props.assignments.length > 0) {
      for (let i in this.props.assignments) {
        optass.push({
          value: this.props.assignments[i].id,
          label: this.props.assignments[i].title,
        });
      }
    }
    return (
      <div>
        <h1>Assign Assignment to Student</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Select Student</label>
            <Select
              value={student_name}
              onChange={this.onChangestudent}
              options={opt}
              isMulti
            />
          </div>
          <div className="form-group">
            <label>Select Assignment</label>
            <Select
              value={assignment}
              onChange={this.onChangeassignment}
              options={optass}
              isMulti
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    assignments: state.assignments.assignments,
    loading: state.assignments.loading,
    students: state.students.students,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ongetAssignement: () => dispatch(actions.getAssignement()),
    ongetStudents: () => dispatch(studentactions.getStudents()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Courses);
