import React from 'react'
import {Route, Switch } from "react-router-dom";
import Home from './Home';
import Login from './Login';
import Register from './Register';
import SignUp from './SignUp';
import SignIn from './SignIn';
import OddajRzeczy from "./OddajRzeczy"


function Routes() {
    return (
        <div>
             <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/login" exact component={SignIn} />
                    <Route path="/register" exact component={SignUp} />
                    <Route path="/oddaj-rzeczy" exact component={OddajRzeczy} />
            </Switch>
        </div>
    )
}

export default Routes
