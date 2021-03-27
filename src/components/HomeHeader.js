import React from 'react'
import '../scss/component-scss/Header.scss'
// import {NavLink, Link} from 'react-router-dom'
import history from './history'
import { Link, animateScroll as scroll } from "react-scroll";

function HomeHeader() {

    const showLogin = () => {
        history.push(`/login`)
    }

    const showRegister = () => {
        history.push(`/register`)
    }

    const showHomePage = () => {
        history.push(`/`)
    }

    return (
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
                        <div className="o-nas">O nasssss</div>
                        <div className="fundacja-i-org">Fundacja i organizacje</div>
                        <div className="kontakt">Kontakt</div>
                    </div>
                </nav>
                
            </div>
        </header>
    )
}

export default HomeHeader
