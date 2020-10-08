import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getSURegisters, deleteSURegisters } from "../../actions/registerSU";
import Pagination from "react-js-pagination";

export class Get extends Component {
  static propTypes = {
    suregisters: PropTypes.array.isRequired,
    getSURegisters: PropTypes.func.isRequired,
    deleteSURegisters: PropTypes.func.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
    };
  }
  //component load then
  componentDidMount() {
    this.props.getSURegisters();
  }
  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber });
  }
  render() {
    return (
      <Fragment>
        <h2>Student List</h2>
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
            {this.props.suregisters.map((suregister) => (
              <tr key={suregister.id}>
                <td>{suregister.username}</td>
                <td>{suregister.email}</td>
                <td>{suregister.password}</td>
                <td>{suregister.year}</td>
                <td>{suregister.batch}</td>
                <td>{suregister.semester}</td>

                <td>
                  <button
                    onClick={this.props.deleteSURegisters.bind(
                      this,
                      suregister.id
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
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={2}
          totalItemsCount={450}
          pageRangeDisplayed={2}
          onChange={this.handlePageChange.bind(this)}
        />
      </Fragment>
    );
  }
}

//state of redux
const mapStateToProps = (state) => ({
  suregisters: state.suregisters.suregisters,
});
export default connect(mapStateToProps, { getSURegisters, deleteSURegisters })(
  Get
);
