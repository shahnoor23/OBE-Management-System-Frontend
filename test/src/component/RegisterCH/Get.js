import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCHRegisters, deleteCHRegisters } from "../../actions/registerCH";
export class Get extends Component {
  static propTypes = {
    chregisters: PropTypes.array.isRequired,
    getCHRegisters: PropTypes.func.isRequired,
    deleteCHRegisters: PropTypes.func.isRequired,
  };
  //component load then
  componentDidMount() {
    this.props.getCHRegisters();
  }
  render() {
    return (
      <Fragment>
        <h2>Register Chairman</h2>
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
            {this.props.chregisters.map((chregister) => (
              <tr key={chregister.id}>
                <td>{chregister.username}</td>
                <td>{chregister.email}</td>
                <td>{chregister.password}</td>
                <td>{chregister.department}</td>

                <td>
                  <button
                    onClick={this.props.deleteCHRegisters.bind(
                      this,
                      chregister.id
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
  chregisters: state.chregisters.chregisters,
});
export default connect(mapStateToProps, { getCHRegisters, deleteCHRegisters })(
  Get
);
