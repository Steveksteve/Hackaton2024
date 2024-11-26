import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserManager from './UserManager';
import GameManager from './GameManager';
import '../styles/Admin.css'; 

const AdminPanel = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const loggedUser = JSON.parse(localStorage.getItem('user'));
        if (!loggedUser || loggedUser.permission !== 'admin') {
            navigate('/login');
        } else {
            setUser(loggedUser);
        }
    }, [navigate]);

    const handleLogout = async () => {
        await fetch('http://localhost/jeux/php/logout.php', { method: 'POST' });
        localStorage.removeItem('user');
        navigate('/login');
    };

    return (
        <div>
            {user && (
                <>
                    <h2>Bienvenue, {user.username}</h2>
                    <button onClick={handleLogout}>Déconnexion</button>
                    <UserManager />
                    <GameManager />
                </>
            )}
        </div>
    );
};

export default AdminPanel;
