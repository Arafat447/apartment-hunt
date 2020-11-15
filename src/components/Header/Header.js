import React from 'react';
import { Link } from 'react-router-dom';
import brandImg from '../../images/logos/Logo.png'
import './Header.scss'

const Header = () => {

    const navClass = `nav-link 
    mr-3 
    text-dark 
    btn-outline-dark
    rounded`;

    return (
        <div className="bg-light">
            <nav className="navbar navbar-expand-lg navbar-light container py-3">
                <Link className="navbar-brand">
                    <img height="50px" src={brandImg} alt="brand-img" />
                </Link>
                <button className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className={navClass}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={navClass}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={navClass}>Service</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={navClass}>Concerns</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={navClass}>Event</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={navClass}>Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="btn text-white btn-custom px-4 py-2"
                            >
                                Login
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;