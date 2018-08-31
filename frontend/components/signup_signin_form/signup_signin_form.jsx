import React from 'react';

class SignupSigninForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password1: '',
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
    let password1 = this.state.password1;
    let password2 = this.state.password2;

    this.props.loginUser({ username, email, password1, password2 });
  }

  signupUser(e) {
    e.persist();
    console.log(this.state);
    let username = this.state.username;
    let email = this.state.email;
    let password1 = this.state.password1;
    let password2 = this.state.password2;

    this.props.registerUser({ username, email, password1, password2 });
  }

  renderForm() {
    return (
      <form className="form-inline">
        <input type="text" className="form-control my-2 mr-sm-2" placeholder="username" onChange={this.update('username')} />

        <div className="input-group my-2 mr-sm-2">
          <input type="email" className="form-control" placeholder="email" onChange={this.update('email')} />
        </div>

        <div className="input-group my-2 mr-sm-2">
          <input type="password" className="form-control" placeholder="password" onChange={this.update('password1')} />
        </div>

        <div className="input-group my-2 mr-sm-2">
          <input type="password" className="form-control" placeholder=" confirm password" onChange={this.update('password2')} />
        </div>

        <button onClick={this.signinUser} className="btn btn-primary my-2">Sign In</button>

        <button onClick={this.signupUser} className="btn btn-primary my-2 ml-2">Create Account</button>
      </form>
    );
  }

  render() {
    return (
      <nav className="navbar navbar-light bg-dark justify-content-between w-100 pt-2 border-bottom" style={{ borderColor: "rgb(150,150,150)"}}>
        <a className="navbar-brand" style={{ color: "white", fontSize: 28 }}>CryptRbit</a>
        {this.renderForm()}
      </nav>
    );
  }
}

export default SignupSigninForm;
