import React from 'react';
import weatherApp from './weatherApp';
import Page404 from './weatherApp/common/404';
import {Switch, Route, Redirect} from 'react-router-dom';

const Routesss = () => (
    <div className="container">
        <Switch>
            <Route name="home" exact path='/' component={weatherApp} />
            <Route path="*" component={Page404}/>
        </Switch>
    </div>
)

export default Routesss;