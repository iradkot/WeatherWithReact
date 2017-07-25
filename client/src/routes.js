import React from 'react';
import weatherApp from './weatherApp';
import Page404 from './weatherApp/common/404';
import {Switch, Route, Redirect} from 'react-router-dom';
import Login from './weatherApp/login.js'
import Register from './weatherApp/register.js'

const Routesss = () => (
    <div className="container">
        <Switch>
            <Route name="home" exact path='/' component={weatherApp} />
            <Route name="login" exact path='/login' component={Login} />
            <Route name="register" exact path='/register' component={Register} />
            <Route path="*" component={Page404}/>
        </Switch>
    </div>
)

export default Routesss;