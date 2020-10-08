import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getTERegisters, deleteTERegisters } from "../../actions/registerTE";
export class Get extends Component {
  static propTypes = {
    chregisters: PropTypes.array.isRequired,
    getTERegisters: PropTypes.func.isRequired,
    deleteTERegisters: PropTypes.func.isRequired,
  };
  //component load then
  componentDidMount() {
    this.props.getTERegisters();
  }
  render() {
    return (
      <Fragment>
        <h2>Teacher List</h2>
        <table className="table table-stripped">
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Password</th>
              <th>Year</th>
              <th>Batch</th>
              <th>Semester</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.teregisters.map((teregister) => (
              <tr key={teregister.id}>
                <td>{teregister.username}</td>
                <td>{teregister.email}</td>
                <td>{teregister.password}</td>
                <td>{teregister.year}</td>
                <td>{teregister.batch}</td>
                <td>{teregister.semester}</td>

                <td>
                  <button
                    onClick={this.props.deleteTERegisters.bind(
                      this,
                      teregister.id
                    )}
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
  teregisters: state.teregisters.teregisters,
});
export default connect(mapStateToProps, { getTERegisters, deleteTERegisters })(
  Get
);
