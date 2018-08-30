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
      <form class="form-inline" onSubmit={this.handleSubmit('signup')}>
        <div class="form-group mb-2">
          <label for="staticEmail2" class="sr-only">Email</label>
          <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="email@example.com" />
        </div>
        <div class="form-group mx-sm-3 mb-2">
          <label for="inputPassword2" class="sr-only">Password</label>
          <input type="password" class="form-control" id="inputPassword2" placeholder="Password" />
        </div>
        <button type="submit" class="btn btn-primary mb-2">Sign Up</button>
      </form>
    );
  }

  renderSignin() {
    return (
      <form class="form-inline" onSubmit={this.handleSubmit('signin')}>
        <label class="sr-only" for="inlineFormInputName2">Name</label>
        <input type="email" class="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="email" />

        <label class="sr-only" for="inlineFormInputGroupUsername2">Username</label>
        <div class="input-group mb-2 mr-sm-2">
          <input type="password" class="form-control" id="inlineFormInputGroupUsername2" placeholder="password" />
        </div>

        <button type="submit" class="btn btn-primary mb-2">Sign In</button>
      </form>
    );
  }

  render() {
    return (
      <nav class="navbar navbar-light bg-light justify-content-between">
        <a class="navbar-brand">Navbar</a>
        {this.renderSignin()}
      </nav>
    );
  }
}

export default SignupSigninForm;
