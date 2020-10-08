import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getAC, deleteAC } from "../../actions/courses";
export class GET extends Component {
  //component load then
  componentDidMount() {
    this.props.getAC();
  }
  render() {
    return (
      <Fragment>
        <h2>Mapping of Courses To Teacher</h2>
        <table className="table table-stripped">
          <thead>
            <tr>
              <th>Techer</th>
              <th>Subject</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.props.courses.map((course, id) => (
              <tr key={course.id}>
                <td>
                  {course.teacher_name.map((name, key) => (
                    <div key={name.id}>{name.email}</div>
                  ))}
                </td>
                <td>
                  {course.subjects.map((sub, key) => (
                    <div key={sub.id}>{sub.tittle}</div>
                  ))}
                </td>

                <td>
                  <button
                    onClick={this.props.deleteAC.bind(this, course.id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

//state of redux
const mapStateToProps = (state) => ({
  courses: state.courses.courses,
});
export default connect(mapStateToProps, { getAC, deleteAC })(GET);
