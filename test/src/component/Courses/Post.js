import React, { Component } from "react";
import Select from "react-select";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getTeachers } from "../../actions/teachers";
import { getSubjects } from "../../actions/subjects";
import { addAC } from "../../actions/courses";
export class Post extends Component {
  state = {
    teacher_name: null,
    subjects: null,
  };

  componentDidMount() {
    this.props.getTeachers();
    this.props.getSubjects();
  }
  onChangeteacher = (selected) => {
    console.log(selected);
    this.setState({
      teacher_name: selected,
    });
  };

  onChangesubject = (selected) => {
    console.log(selected);
    this.setState({
      subjects: selected,
    });
  };
  onChange = (e) =>
    this.setState({
      [e.target.name]: e.target.value,
    });
  onSubmit = (e) => {
    e.preventDefault();
    const { teacher_name, subjects } = this.state;
    const ac = { teacher_name, subjects };
    ac.teacher_name = [];
    for (let i in teacher_name) {
      ac.teacher_name.push(teacher_name[i].value);
    }
    ac.subjects = [];
    for (let i in subjects) {
      ac.subjects.push(subjects[i].value);
    }
    console.log(ac);
    this.props.addAC(ac);
  };
  render() {
    const { teacher_name, subjects } = this.state;
    let opt = [];
    let optsub = [];

    if (this.props.teachers.length > 0) {
      for (let i in this.props.teachers) {
        opt.push({
          value: this.props.teachers[i].id,
          label: this.props.teachers[i].email,
        });
      }
    }

    if (this.props.subjects.length > 0) {
      for (let i in this.props.subjects) {
        optsub.push({
          value: this.props.subjects[i].id,
          label: this.props.subjects[i].tittle,
        });
      }
    }
    return (
      <div>
        <h1>Assigned Subjects to Teachers</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Select Teacher</label>
            <Select
              value={teacher_name}
              onChange={this.onChangeteacher}
              options={opt}
              isMulti
            />
          </div>
          <div className="form-group">
            <label>Select Subject</label>
            <Select
              value={subjects}
              onChange={this.onChangesubject}
              options={optsub}
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
const mapStateToProps = (state) => ({
  teachers: state.teachers.teachers,
  subjects: state.subjects.subjects,
});
export default connect(mapStateToProps, { getSubjects, getTeachers, addAC })(
  Post
);
