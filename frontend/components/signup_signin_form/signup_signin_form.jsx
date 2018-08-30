import React from 'react';

class SignupSigninForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      action: 'signup',
      email: '',
      password: ''
    }

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    }
  }

  handleSubmit(action) {
    return (e) => {
      e.preventDefault();
      let email = this.state.email;
      let password = this.state.password;

      if (action == 'signup') {
        this.props.registerUser(email, password);
      } else {
        this.props.loginUser(email, password);
      }
    }
  }

  renderSignup() {
    return (
      <form className="form-inline" onSubmit={this.handleSubmit('signup')}>
        <div className="form-group mb-2">
          <label htmlFor="staticEmail2" className="sr-only">Email</label>
          <input type="text" readonly className="form-control-plaintext" id="staticEmail2" value="email@example.com" />
        </div>
        <div className="form-group mx-sm-3 mb-2">
          <label htmlFor="inputPassword2" className="sr-only">Password</label>
          <input type="password" className="form-control" id="inputPassword2" placeholder="Password" />
        </div>
        <button type="submit" className="btn btn-primary mb-2">Sign Up</button>
      </form>
    );
  }

  renderSignin() {
    return (
      <form className="form-inline" onSubmit={this.handleSubmit('signin')}>
        <label className="sr-only" htmlFor="inlineFormInputName2">Name</label>
        <input type="email" className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="email" />

        <label className="sr-only" htmlFor="inlineFormInputGroupUsername2">Username</label>
        <div className="input-group mb-2 mr-sm-2">
          <input type="password" className="form-control" id="inlineFormInputGroupUsername2" placeholder="password" />
        </div>

        <button type="submit" className="btn btn-primary mb-2">Sign In</button>
      </form>
    );
  }

  render() {
    return (
      <nav className="navbar navbar-light bg-light justify-content-between">
        <a className="navbar-brand">CryptRbit</a>
        {this.renderSignin()}
      </nav>
    );
  }
}

export default SignupSigninForm;
