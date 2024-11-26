import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AuthPage.css';

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [permission, setPermission] = useState('user'); // Par défaut, les nouveaux utilisateurs sont des utilisateurs standards
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost/jeux/php/login.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });
        const data = await response.json();
        if (data.message === 'Connexion établie') {
            localStorage.setItem('user', JSON.stringify(data.user));
            navigate('/admin');
        } else {
            setError(data.message);
        }
    };

    const handleSignUpSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost/jeux/php/create_user.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password, username, permission, date_of_birth: dateOfBirth }),
        });
        const data = await response.json();
        if (data.message === 'User created successfully') {
            alert('Compte créé avec succès !');
            setIsLogin(true);
        } else {
            setError(data.message);
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-tabs">
                <button className={isLogin ? 'active' : ''} onClick={() => setIsLogin(true)}>Se connecter</button>
                <button className={!isLogin ? 'active' : ''} onClick={() => setIsLogin(false)}>Créer un compte</button>
            </div>
            {isLogin ? (
                <form className="auth-form" onSubmit={handleLoginSubmit}>
                    <h2>Se Connecter</h2>
                    {error && <p className="error-message">{error}</p>}
                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="auth-button">Se Connecter</button>
                </form>
            ) : (
                <form className="auth-form" onSubmit={handleSignUpSubmit}>
                    <h2>Créer un compte</h2>
                    {error && <p className="error-message">{error}</p>}
                    <div className="form-group">
                        <label>Nom d'utilisateur:</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Date de naissance:</label>
                        <input
                            type="date"
                            value={dateOfBirth}
                            onChange={(e) => setDateOfBirth(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="auth-button">S'inscrire</button>
                </form>
            )}
        </div>
    );
};

export default AuthPage;
