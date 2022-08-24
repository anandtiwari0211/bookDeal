import React, { Component } from "react";

class Signup extends Component {
  constructor(props){
    super(props);
    this.state = {
      terms: true,
      passwordCheck: false
    }
  }

  handleChange = e => {
    const passwordCheck = this.state.password
                          && e.target.name === "confirmPassword"
                          && (this.state.password === e.target.value);
    this.setState({ [e.target.name]: e.target.value, passwordCheck });
  }

  handleSubmit = e => {
    e.preventDefault();
    const { email, password, name, terms } = this.state;
    this.props.signupRequest({ email, password, name, terms });
  }

  render() {
    return (
      <div
        tabIndex="-1"
        role="dialog"
      >
        <div className="login-reg modal-dialog-centered " role="document">
          <div className="modal-content">
            <div className="form-container">
              <div className="img-container">
                <img src="images/signup.png" alt="" />
              </div>
              <div className="form-section">
                <h2>Sign Up</h2>
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Name</label>
                    <input
                      className="form-control"
                      onChange={this.handleChange}
                      name="name"
                      type="text"
                      placeholder="Full Name*"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email</label>
                    <input
                      type="email"
                      onChange={this.handleChange}
                      name="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Example@domain.com"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                      type="password"
                      onChange={this.handleChange}
                      name="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="********"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Confirm Password</label>
                    <input
                      type="password"
                      onChange={this.handleChange}
                      name="confirmPassword"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="********"
                      required
                    />
                    { (this.state.confirmPassword && !this.state.passwordCheck)
                      && <span className="text-danger">Password doesn't matched</span>}
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Sign Up
                  </button>
                </form>
              </div>
            </div>
            <div className="clearfix" />
          </div>
        </div>
      </div>
    )
  }
}

export default Signup
