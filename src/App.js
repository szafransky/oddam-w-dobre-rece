import {Router} from 'react-router-dom'
import Routes from './components/Routes';
import Home from './components/Home';
import history from './components/history'
import HomeHeader from './components/HomeHeader';
import Footer from './components/Footer';
import React, { Component } from 'react';
import Navigation from "./components/Navigation"
import { withFirebase } from './components/Firebase';

// import './scss/settings/reset.scss'

// function App() {
//   return (
//     <div className="App">
//       <HomeHeader />
//       <Router history={history}>
//         <Routes />
//       </Router>
      
//       <Footer />
      
//     </div>
//   );
// }
class App extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      authUser: null,
    };
  }

  componentDidMount() {
    this.listener = this.props.firebase.auth.onAuthStateChanged(
      authUser => {
        authUser
          ? this.setState({ authUser })
          : this.setState({ authUser: null });
      },
    );
  }

  componentWillUnmount() {
    this.listener();
  }
 
  render() {
    return (
      <Router history={history}>
        <div>
          <Navigation authUser={this.state.authUser} />
          <Router history={history}>
          <Routes />
          </Router>
      
          <Footer />
        </div>
      </Router>
    );
  }
}


export default withFirebase(App);
