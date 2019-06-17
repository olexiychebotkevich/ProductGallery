import React, { Component } from 'react';

class NavMenu extends Component {
    state = {}
    render() {
        return (
            <header>
                <nav className="navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow mb-3 navbar navbar-light">
                    <div className="container">
                        <a className="navbar-brand" href="/">WebBlog</a>
                        <button type="button" className="mr-2 navbar-toggler">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="d-sm-inline-flex flex-sm-row-reverse collapse navbar-collapse">
                            <ul className="navbar-nav flex-grow">
                                <li className="nav-item">
                                    <a className="text-dark nav-link" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="text-dark nav-link" href="/register">Register</a>
                                </li><li className="nav-item">
                                    <a className="text-dark nav-link" href="/counter">Counter</a>
                                </li>
                                <li className="nav-item">
                                    <a className="text-dark nav-link" href="/fetch-data">Fetch data</a>
                                </li>
                                <li className="nav-item">
                                    <a className="text-dark nav-link" href="/login">Login</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default NavMenu;