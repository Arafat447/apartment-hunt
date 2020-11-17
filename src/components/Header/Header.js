import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import brandImg from '../../images/logos/Logo.png'
import './Header.scss'

const Header = () => {

    const navClass = `nav-link 
    mr-3 
    text-dark 
    btn-outline-dark
    rounded`;

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let history = useHistory();

    const handleLoginBtn = () => {
        if (loggedInUser.email) {
            setLoggedInUser({})
            history.push('/home')
        } else {
            history.push('/login')
        }
    }
    
    return (
        <div className="bg-light">
            <nav className="navbar navbar-expand-lg navbar-light container py-3">
                <Link to='/' className="navbar-brand">
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
                            <button onClick={handleLoginBtn}
                                className="btn text-white btn-custom px-4 py-2"
                            >
                                {loggedInUser.isSignedIn ? `${loggedInUser.name.split(' ')[0]}` : 'Login'}
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;