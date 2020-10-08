import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addITRegister } from "../../actions/registerIT";
export class Post extends Component {
  state = {
    username: "",
    email: "",
    password: "",
  };
  static propTypes = {
    addITRegister: PropTypes.func.isRequired,
  };
  onChange = (e) =>
    this.setState({
      [e.target.name]: e.target.value,
    });
  onSubmit = (e) => {
    e.preventDefault();
    const { username, email, password } = this.state;
    const itregister = { username, email, password };
    this.props.addITRegister(itregister);
  };
  render() {
    const { username, email, password } = this.state;
    return (
      <div>
        <h1>Register IT_Manager</h1>
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
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addITRegister })(Post);
