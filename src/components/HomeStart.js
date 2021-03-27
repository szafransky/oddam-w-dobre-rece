import React from 'react'
import '../scss/component-scss/Start.scss'
import {NavLink, Link} from 'react-router-dom'
import history from './history'


function HomeStart() {

    const showLogin = () => {
        history.push(`/login`)
    }

    return (
        <div className="container start-container">
            <div className="img-container"></div>
            <div className="description-container">
                <div className="description">
                    <h2>Zacznij pomagać!</h2>
                    <h2>Oddaj niechciane rzeczy w zaufane ręce</h2>
                    <div className="img-description"></div>
                    <div className="buttons">
                        <Link className="button oddaj" onClick={showLogin} to="/login">Oddaj rzeczy</Link>
                        {/* <div className="button oddaj">Oddaj Rzeczy</div> */}
                        {/* <div className="button zorganizuj">Zorganizuj zbiórkę</div> */}
                        <Link className="button zorganizuj" onClick={showLogin} to="/register">Zorganizuj zbiórkę</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeStart
