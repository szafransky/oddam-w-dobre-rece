import React,{ useContext } from 'react';
// import { Link } from 'react-router-dom';
import '../scss/component-scss/Header.scss'
import SignOutButton from './SignOut';
import { FirebaseContext } from './Firebase';

import history from './history'
import { Link, animateScroll as scroll } from "react-scroll";


const Navigation = ({ authUser }) => (

    <div>{authUser ? <NavigationAuth user={authUser} /> : <NavigationNonAuth />}</div>
    
  
  
);

const showLogin = () => {
    history.push(`/login`)
}

const showRegister = () => {
    history.push(`/register`)
}

const showHomePage = () => {
    history.push(`/`)
}

const showOddajRzeczy = () => {
    history.push(`/oddaj-rzeczy`)
}


 
const NavigationAuth = ({user}) => (

    
    <header>
    <div className="container header-container">
    <nav className="nav-bar">
        <div className="list1">
            <div className="user">Cześć {user.email}</div>
            <div onClick={showOddajRzeczy} className="oddaj-rzeczy">Oddaj rzeczy</div>
            <SignOutButton className="sign-out" />
        </div>
        <div className="list2">
        <Link className="start" onClick={showHomePage}>Start</Link>
       {/* <div>O co chodzi?</div> */}
       <Link
           className="o-co-chodzi"
           activeClass="active"
           to="four-steps-container"
           spy={true}
           smooth={true}
           offset={-70}
           duration={500}
       >O co Chodzi</Link>
        <Link
                className="o-co-chodzi"
                activeClass="active"
                to="about-us-container"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >O nas</Link>
        <Link
                className="who-we-help-container"
                activeClass="active"
                to="about-us-container"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >Fundacja i organizacje</Link>
         <Link
                className="o-co-chodzi"
                activeClass="active"
                to="contact-container"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >Kontakt</Link>
        </div>
        
    </nav>
      </div>
      </header>
   
    
  
);
 
const NavigationNonAuth = () => (
    <header>
    <div className="container header-container">
    <nav className="nav-bar">
    <div className="list1">
   <Link className="login" onClick={showLogin} to="/login">Zaloguj</Link>
   <Link className="register" onClick={showRegister} to="/register">Załóz konto</Link>
   </div>
   <div className="list2">
       <Link className="start" onClick={showHomePage}>Start</Link>
       {/* <div>O co chodzi?</div> */}
       <Link
           className="o-co-chodzi"
           activeClass="active"
           to="four-steps-container"
           spy={true}
           smooth={true}
           offset={-70}
           duration={500}
       >O co Chodzi</Link>
        <Link
                className="o-co-chodzi"
                activeClass="active"
                to="about-us-container"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >O nas</Link>
        <Link
                className="who-we-help-container"
                activeClass="active"
                to="about-us-container"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >Fundacja i organizacje</Link>
         <Link
                className="o-co-chodzi"
                activeClass="active"
                to="contact-container"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >Kontakt</Link>
   </div>
  
</nav>
</div>
        </header>
);
 
export default Navigation;