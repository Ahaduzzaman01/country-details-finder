import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/">Country Finder</Link>
                    <div className="col-auto">
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <Link class="nav-link" to="/home">Home</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="#">Features</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="#">Pricing</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;