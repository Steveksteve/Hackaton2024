import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Squash as Hamburger } from 'hamburger-react'; // Icône Squash de hamburger-react
import logo from '../images/logo.png';
import '../styles/SiteHeader.css';

const SiteHeader = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'));
    const [isOpen, setOpen] = useState(false);

    const handleLogout = async () => {
        await fetch('http://localhost/jeux/php/logout.php', { method: 'POST' });
        localStorage.removeItem('user');
        navigate('/login');
    };

    const toggleMenu = () => {
        setOpen(!isOpen);
    };

    return (
        <header className="site-header">
            <div className="menu-icon" onClick={toggleMenu}>
                <Hamburger toggled={isOpen} toggle={setOpen} />
            </div>
            <div className="site-name">
                <div className="circle"></div>
                <img src={logo} alt="logo" height="100px" />
                <h1>Wikigame</h1>
                <p>Découvrez l'univers des jeux de société à travers notre encyclopédie, votre guide ludique moderne !</p>
            </div>
            <div className="search-icon">&#128269;</div>
            <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
                <ul>
                    <li className='nav-button'><Link to="/" onClick={toggleMenu}>Accueil</Link></li>
                    <li className='nav-button'><Link to="/jeux" onClick={toggleMenu}>Jeux</Link></li>
                    <li className='nav-button'><Link to="/contribuer" onClick={toggleMenu}>Contribuer</Link></li>
                    <li className='nav-button'><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
                    {user ? (
                        <>
                            <li className='nav-button'><button onClick={() => { handleLogout(); toggleMenu(); }}>Logout</button></li>
                            {user.permission === 'admin' && (
                                <li className='nav-button'><Link to="/admin" onClick={toggleMenu}>Admin Panel</Link></li>
                            )}
                        </>
                    ) : (
                        <li className='nav-button'><Link to="/login" onClick={toggleMenu}>Login</Link></li>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default SiteHeader;
