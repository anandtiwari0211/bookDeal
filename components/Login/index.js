import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.loginRequest({ email, password });
  }

  render() {
    return (
      <div
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="login-reg modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="form-container">
              <div className="img-container">
                <img src="images/signup.png" alt="" />
              </div>
              <div className="form-section">
                <h2>Sign In</h2>
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                      type="email"
                      name="email"
                      onChange={this.handleChange}
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
                      name="password"
                      onChange={this.handleChange}
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="********"
                      required
                    />
                  </div>
                  <p>
                    <a href="#" onClick={() => this.props.doModalOpen({ modalIsOpen: true, type: 'Forgot-Password' })}>Forgot Password?</a>
                  </p>
                  <button type="submit" className="btn btn-primary">
                    Sign In
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

export default Login
