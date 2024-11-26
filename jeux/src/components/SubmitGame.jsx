import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/Submit.css'; // Assurez-vous d'importer le fichier CSS

const SubmitGame = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [game, setGame] = useState({
        name: '',
        country: '',
        description: '',
        image: '',
        players: '',
        age: '',
    });

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (!storedUser) {
            setErrorMessage('Vous devez être connecté pour soumettre un jeu.');
        } else {
            setUser(storedUser);
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setGame((prevGame) => ({
            ...prevGame,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!user) {
            setErrorMessage('Vous devez être connecté pour soumettre un jeu.');
            return;
        }

        const response = await fetch('http://localhost/php/create_game.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(game),
        });

        if (response.ok) {
            alert('Jeu soumis avec succès !');
            navigate('/jeux');
        } else {
            alert('Échec de la soumission du jeu.');
        }
    };

    if (!user) {
        return (
            <div className="form-container">
                <p className="error-message">{errorMessage}</p>
                <Link to="/login" className="login-button">Se connecter</Link>
            </div>
        );
    }

    return (
        <div className="form-container">
            <h2>Soumettre un jeu</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Nom du jeu</label>
                    <input
                        type="text"
                        name="name"
                        value={game.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Pays d'origine</label>
                    <input
                        type="text"
                        name="country"
                        value={game.country}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea
                        name="description"
                        value={game.description}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Image (URL)</label>
                    <input
                        type="text"
                        name="image"
                        value={game.image}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Nombre de joueurs</label>
                    <input
                        type="number"
                        name="players"
                        value={game.players}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Âge recommandé</label>
                    <input
                        type="number"
                        name="age"
                        value={game.age}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="submit-button">Soumettre</button>
            </form>
        </div>
    );
};

export default SubmitGame;
