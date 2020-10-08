import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addCHRegister } from "../../actions/registerCH";
export class Post extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    department: "",
  };
  static propTypes = {
    addCHRegister: PropTypes.func.isRequired,
  };
  onChange = (e) =>
    this.setState({
      [e.target.name]: e.target.value,
    });
  onSubmit = (e) => {
    e.preventDefault();
    const { username, email, password, department } = this.state;
    const chregister = { username, email, password, department };
    this.props.addCHRegister(chregister);
  };
  render() {
    const { username, email, password, department } = this.state;
    return (
      <div>
        <h1>Register Chairman</h1>
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
            <label>Department</label>
            <input
              className="form-control"
              type="text"
              name="department"
              onChange={this.onChange}
              value={department}
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

export default connect(null, { addCHRegister })(Post);
