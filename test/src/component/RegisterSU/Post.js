import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addSURegister } from "../../actions/registerSU";
export class Post extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    batch: "",
    year: "",
    semester: "",
  };
  static propTypes = {
    addSURegister: PropTypes.func.isRequired,
  };
  onChange = (e) =>
    this.setState({
      [e.target.name]: e.target.value,
    });
  onSubmit = (e) => {
    e.preventDefault();
    const { username, email, password, batch, year, semester } = this.state;
    const suregister = { username, email, password, batch, year, semester };
    this.props.addSURegister(suregister);
  };
  render() {
    const { username, email, password, batch, year, semester } = this.state;
    return (
      <div>
        <h1>Register Student</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input
              className="form-control"
              type="text"
              name="username"
              onChange={this.onChange}
              value={username}
            ></input>
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              className="form-control"
              type="text"
              name="email"
              onChange={this.onChange}
              value={email}
            ></input>
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              className="form-control"
              type="text"
              name="password"
              onChange={this.onChange}
              value={password}
            ></input>
          </div>

          <div className="form-group">
            <label>Batch</label>
            <input
              className="form-control"
              type="text"
              name="batch"
              onChange={this.onChange}
              value={batch}
            ></input>
          </div>
          <div className="form-group">
            <label>Year</label>
            <input
              className="form-control"
              type="text"
              name="year"
              onChange={this.onChange}
              value={year}
            ></input>
          </div>
          <div className="form-group">
            <label>Semester</label>
            <input
              className="form-control"
              type="text"
              name="semester"
              onChange={this.onChange}
              value={semester}
            ></input>
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

export default connect(null, { addSURegister })(Post);
