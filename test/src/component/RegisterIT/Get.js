import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getITRegisters, deleteITRegisters } from "../../actions/registerIT";
export class Get extends Component {
  static propTypes = {
    itregisters: PropTypes.array.isRequired,
    getITRegisters: PropTypes.func.isRequired,
    deleteITRegisters: PropTypes.func.isRequired,
  };
  //component load then
  componentDidMount() {
    this.props.getITRegisters();
  }
  render() {
    return (
      <Fragment>
        <h2>IT Manager</h2>
        <table className="table table-stripped">
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Password</th>
              <th>Department</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.itregisters.map((itregister) => (
              <tr key={itregister.id}>
                <td>{itregister.username}</td>
                <td>{itregister.email}</td>
                <td>{itregister.password}</td>
                <td>{itregister.department}</td>

                <td>
                  <button
                    onClick={this.props.deleteITRegisters.bind(
                      this,
                      itregister.id
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
  itregisters: state.itregisters.itregisters,
});
export default connect(mapStateToProps, { getITRegisters, deleteITRegisters })(
  Get
);
