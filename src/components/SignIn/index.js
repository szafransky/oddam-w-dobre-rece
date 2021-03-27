import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import '../../scss/component-scss/LogIn.scss'
import { SignUpLink } from '../SignUp';
import { withFirebase } from '../Firebase';

import history from '../history'
import { Link, animateScroll as scroll } from "react-scroll";


 
const SignInPage = () => (
  <div>
   
    <SignInForm />
   
  </div>
);

const showRegister = () => {
  history.push(`/register`)
}
 
const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};
 
class SignInFormBase extends Component {
  constructor(props) {
    super(props);
 
    this.state = { ...INITIAL_STATE };
  }
 
  onSubmit = event => {
    const { email, password } = this.state;
 
    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push("/");
      })
      .catch(error => {
        this.setState({ error });
      });
 
    event.preventDefault();
  };
 
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
 
  render() {
    const { email, password, error } = this.state;
 
    const isInvalid = password === '' || email === '';
 
    return (
      <section className="login-container">
          <div className="login-wrapper">
            <h1>Zaloguj się</h1>
            <div className="img"></div>
            <form onSubmit={this.onSubmit}>
              <div className="input-container">
                <div className="email">
                  <label>Email</label>
                  <input
                    name="email"
                    value={email}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Email Address"
                  />
                </div>
                
                <div className="password">
                  <label>Hasło</label>
                  <input
                    name="password"
                    value={password}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Password"
                  />
                </div>
               
              </div>
              
              <div className="buttons">
                <button className="sign-in" disabled={isInvalid} type="submit">
                  Sign In
                </button>
                <Link className="register" onClick={showRegister} to="/register">Załóz konto</Link>
              </div>
             
      
              {error && <p>{error.message}</p>}
            </form>
        </div>
          
      </section>
     
    );
  }
}
 
const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase);
 
export default SignInPage;
 
export { SignInForm };