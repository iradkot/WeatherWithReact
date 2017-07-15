import React, {Component} from 'react';
import {Link} from 'react-router-dom'
class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link className="navbar-brand" to='/'>React weather project</Link>
                    </div>
                    <ul className="nav navbar-nav">
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/page'>404</Link>
                        </li>
                        <li>
                            <Link to="/about">about</Link>
                        </li>
                        <li>
                            <Link to="/custom/1232434">custom</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;
