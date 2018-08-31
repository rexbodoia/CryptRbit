import React from 'react';

class SignupSigninForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: '',
      password2: ''
    }

    this.update = this.update.bind(this);
    this.signinUser = this.signinUser.bind(this);
    this.signupUser = this.signupUser.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    }
  }

  signinUser(e) {
    e.persist();
    let username = this.state.username;
    let email = this.state.email;
    let password = this.state.password;
    let password2 = this.state.password2;

    this.props.loginUser(username, email, password, password2s);
  }

  signupUser(e) {
    e.persist();
    let username = this.state.username;
    let email = this.state.email;
    let password = this.state.password;
    let password2 = this.state.password2;

    this.props.registerUser(username, email, password, password2);
  }

  renderSignin() {
    return (
      <form className="form-inline">
        <input type="email" className="form-control my-2 mr-sm-2" placeholder="email" onChange={this.update('email')} />

        <div className="input-group my-2 mr-sm-2">
          <input type="password" className="form-control" placeholder=" confirm password" onChange={this.update('password2')} />
        </div>

        <button onClick={this.signinUser} className="btn btn-primary my-2">Sign In</button>

        {this.renderModal()}
      </form>
    );
  }

  renderModal() {
    return (
      <div className="float-right">
        <button type="button" className="btn btn-primary my-2 ml-2" data-toggle="modal" data-target="#exampleModalCenter">
          Create Account
        </button>

        <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {this.renderSignup()}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" onClick={this.signupUser}>Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderSignup() {
    return (
      <div>
        <div className="row">
          <div className="input-group my-2 mr-2 ml-4 pl-3">
            <input type="username" className="form-control" placeholder="username" onChange={this.update('username')} />
          </div>

          <div className="input-group my-2 mr-2 ml-4">
            <input type="email" className="form-control" placeholder="email" onChange={this.update('email')} />
          </div>
        </div>

        <div className="row">
          <div className="input-group my-2 mr-2 ml-4 pl-3">
            <input type="password" className="form-control" placeholder="password" onChange={this.update('password')} />
          </div>

          <div className="input-group my-2 mr-2 ml-4">
            <input type="password" className="form-control" placeholder=" confirm password" onChange={this.update('password2')} />
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <nav className="navbar navbar-light bg-dark justify-content-between w-100 pt-2 border-bottom" style={{ borderColor: "rgb(150,150,150)"}}>
        <a className="navbar-brand" style={{ color: "white", fontSize: 28 }}>CryptRbit</a>
        {this.renderSignin()}
      </nav>
    );
  }
}

export default SignupSigninForm;
