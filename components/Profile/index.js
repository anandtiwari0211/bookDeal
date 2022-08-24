import React, { Component } from "react";

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    this.setState({ user: this.props.user })
  }

  componentDidUpdate(prevProps) {
    if(prevProps.timestamp !== this.props.timestamp) {
      this.props.getUserRequest()
    }
  }

  handleChange = e => {
    const fieldValue = e.target.files ? e.target.files[0] : e.target.value 
    this.setState({ user: {
      ...this.state.user,
      [e.target.name]: fieldValue
    }})
  }

  handleSubmit = e => {
    e.preventDefault()
    const formData = new FormData();
    const user = { ...this.state.user };
    Object.keys(user).forEach( name => {
      formData.append(name, user[name])
    })
    this.props.updateProfileRequest(formData);
  }

  render() {
    const { user } = this.state;
    return (
      <div className="inr_wrap">
        
        <div className="sectionww wbd">
          <div className="form-container">
            <div className="widget clearfix">
              <form onSubmit={this.handleSubmit} className="contact-form newsletter">
                
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <label className="control-label">
                      Your Name <small>Enter your company name</small>
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Jenny Pelt"
                      value={user.name}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <label className="control-label">
                      Title{" "}
                      <small>Enter a short title (Ex: Web Designer)</small>
                    </label>
                    <input
                      type="text"
                      name="title"
                      className="form-control"
                      placeholder="Web Designer"
                      value={user.title}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <label className="control-label">
                      Website <small>Enter your website here</small>
                    </label>
                    <input
                      type="text"
                      name="website"
                      className="form-control"
                      placeholder="http://psdconverthtml.com/"
                      value={user.website}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <label className="control-label">
                      Email <small>Enter offical email here</small>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="support@psdconverthtml.com"
                      readOnly
                      value={user.email}
                    />
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <label className="control-label">
                      Facebook URL <small>Enter your Facebook url</small>
                    </label>
                    <input
                      type="text"
                      name="facebookURL"
                      className="form-control"
                      placeholder="http://facebook.com/psdconverthtml"
                      value={user.facebookURL}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <label className="control-label">
                      Twitter URL <small>Enter your Twitter url</small>
                    </label>
                    <input
                      type="text"
                      name="twitterURL"
                      className="form-control"
                      placeholder="http://twitter.com/psdconverthtml"
                      value={user.twitterURL}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <label className="control-label">
                      Google+ URL <small>Enter your Google+ url</small>
                    </label>
                    <input
                      type="text"
                      name="googleURL"
                      className="form-control"
                      placeholder="http://plus.google.com/+psdconverthtml"
                      value={user.googleURL}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <label className="control-label">
                      Linkedin URL <small>Enter your Linkedin url</small>
                    </label>
                    <input
                      type="text"
                      name="linkedInURL"
                      className="form-control"
                      placeholder="http://linkedin.com/u/psdconverthtml"
                      value={user.linkedInURL}
                      onChange={this.handleChange}
                    />
                  </div>

                  <div className="col-md-12 col-sm-12">
                    <label className="control-label">
                      Your Photo
                      <small>Please add a photo. (200x200)</small>
                    </label>
                    <div
                      className="fileupload fileupload-new"
                      data-provides="fileupload"
                    >
                      <div className="fileupload-preview thumbnail">
                        <img src={user.profilePicture} alt="" width="150" />
                      </div>
                      <br />
                      <span className="btn btn-default btn-file">
                        <span className="fileupload-new">Upload Photo</span>
                        <span className="fileupload-exists">Change</span>
                        <input
                          name="profile_picture"
                          type="file"
                          onChange={this.handleChange}
                        />
                      </span>
                      <a
                        href="#"
                        className="btn btn-default fileupload-exists"
                        data-dismiss="fileupload"
                      >
                        <i className="fa fa-close" />
                      </a>
                    </div>
                  
                </div>
                <hr className="invis3" />
                  <div className="col-md-12 col-sm-12">
                    <button type="submit" className="btn btn-primary">Update Profile</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
