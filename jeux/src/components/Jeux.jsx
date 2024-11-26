import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/GameList.css';

const GameList = () => {
    const [games, setGames] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const response = await fetch('http://localhost/jeux/php/read_games.php');
                const data = await response.json();
                if (response.ok) {
                    setGames(data);
                } else {
                    setError(data.message);
                }
            } catch (error) {
                setError('Une erreur est survenue lors de la récupération des jeux.');
            }
        };

        fetchGames();
    }, []);

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="game-list-container">
            <h2>Liste des jeux</h2>
            {games.map((game) => (
                <div key={game.GameId} className="game-item">
                    <h3>{game.GameName}</h3>
                    <p>{game.Description}</p>
                    <Link to={`/game/${game.GameId}`}>Voir les détails</Link>
                </div>
            ))}
        </div>
    );
};

export default GameList;