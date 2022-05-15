import React from "react";

const NavbarComponent = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <ul className="nav">
                    <a className="navbar-brand" href="/">Blog-Content</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent">
                        <span className="navbar dropdown-toggle"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <li className="nav-item">
                            <a className="nav-link link-light" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link link-light" href="/create">Create Content</a>
                        </li>
                    </div>
                </ul>
            </div>
        </nav>

    )
}

export default NavbarComponent