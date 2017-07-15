import React from 'react';
import Home from './components/Home';
import Page from './components/Page';
import About from './components/about/About';
import AuthorsPage from './components/authors/AuthorsPage';
import AuthorsItem from './components/authors/AuthorsPage';
import ManageAuthorsPage from './components/authors/ManageAuthorsPage';
import Page404 from './components/404';
import {Switch, Route, Redirect} from 'react-router-dom'

const authors = () => (
    <Switch>
        <Route exact path='/authors' component={AuthorsPage}/>
        <Route path='/authors/:id' component={AuthorsItem}/>
    </Switch>
)
const Routesss = () => (
    <div className="container">
        <Switch>
            <Route path="/author/:id" component={ManageAuthorsPage}/>
            <Route name="home" exact path='/' component={Home} />
            <Route name="page" path='/page' component={Page}/>
            <Route name="About" path='/About' component={About}/>
            <Route name="authors" path='/authors' component={authors}/>
            <Route name="AddAuthor" path='/author' component={ManageAuthorsPage}/>
            <Route path="/author/:id" name="EditAuthor" component={ManageAuthorsPage}/>
            <Redirect from="/about-us" to="/page"/>
            <Route path="*" component={Page404}/>
        </Switch>
    </div>
)

export default Routesss;