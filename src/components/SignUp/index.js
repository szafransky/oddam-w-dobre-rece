import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FirebaseContext } from '../Firebase';
import { withFirebase } from '../Firebase';
import { compose } from 'recompose';
import '../../scss/component-scss/Register.scss'
 

const SignUpPage = () => (
  <div>
    {/* <h1>SignUp</h1> */}
    <SignUpForm />
  </div>
);

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
  };
 
class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }
 
  onSubmit = event => {
    const { username, email, passwordOne } = this.state;
 
    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        // Create a user in your Firebase realtime database
        return this.props.firebase
          .user(authUser.user.uid)
          .set({
            username,
            email,
          });
      })
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push("/");
      })
      .catch(error => {
        this.setState({ error });
      });
 
    event.preventDefault();
  }
 
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
 
  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';
 
    return (
      <section className="register-container">
      <div className="register-wrapper">
        <h1>Zarejestruj się</h1>
        <div className="img"></div>
        
        
          <form onSubmit={this.onSubmit}>
          <div className="input-container">
            <div className="email">
                <label>Full name</label>
                <input
                name="username"
                value={username}
                onChange={this.onChange}
                type="text"
                
              />
            </div>

            <div className="email">
                <label>Email</label>
                <input
                name="email"
                value={email}
                onChange={this.onChange}
                type="text"
                
              />
            </div>

            <div className="email">
                <label>Password</label>
                <input
                name="passwordOne"
                value={passwordOne}
                onChange={this.onChange}
                type="password"
               
              />
            </div>

            <div className="email">
                <label>Confirm password</label>
                <input
                name="passwordTwo"
                value={passwordTwo}
                onChange={this.onChange}
                type="password"
                
              />
            </div>
          </div>
          <button className="register" disabled={isInvalid} type="submit">
                Załóz konto
          </button>
          {error && <p>{error.message}</p>}
  
      </form>
      </div>
      </section>
     
       
       
 
       

/* <form onSubmit={this.onSubmit}>
<input
  name="username"
  value={username}
  onChange={this.onChange}
  type="text"
  placeholder="Full Name"
/>
<input
  name="email"
  value={email}
  onChange={this.onChange}
  type="text"
  placeholder="Email Address"
/>
<input
  name="passwordOne"
  value={passwordOne}
  onChange={this.onChange}
  type="password"
  placeholder="Password"
/>
<input
  name="passwordTwo"
  value={passwordTwo}
  onChange={this.onChange}
  type="password"
  placeholder="Confirm Password"
/>
<button disabled={isInvalid} type="submit">
     Sign Up
</button>

{error && <p>{error.message}</p>}
</form> */
    );
  }
}
 
const SignUpLink = () => (
  <p>
    Don't have an account? <Link to="/register">Sign Up</Link>
  </p>
);

const SignUpForm = compose(
    withRouter,
    withFirebase,
  )(SignUpFormBase);
 
export default SignUpPage;
 
export { SignUpForm, SignUpLink };