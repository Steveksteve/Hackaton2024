import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/GameDetails.css';

const TestGameDetails = () => {
    const { id } = useParams();
    const [game, setGame] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchGameDetails = async () => {
            try {
                const response = await fetch(`http://localhost/jeux/php/get_game_by_id.php?id=${id}`);
                const data = await response.json();
                if (response.ok) {
                    setGame(data);
                } else {
                    setError(data.message);
                }
            } catch (error) {
                setError('Une erreur est survenue lors de la récupération des détails du jeu.');
            }
        };

        fetchGameDetails();
    }, [id]);

    if (error) {
        return <p>{error}</p>;
    }

    if (!game) {
        return <p>Chargement...</p>;
    }

    return (
        <div>
            <h2>Détails du jeu</h2>
            <div className="game-details-container">
                <h2>{game.GameName}</h2>
                <img src={game.GameImage} alt={game.GameName} className="game-image" />
                <p><strong>Pays d'origine:</strong> {game.GameCountry}</p>
                <p><strong>Description:</strong> {game.Description}</p>
                <p><strong>Nombre de joueurs:</strong> {game.Players}</p>
                <p><strong>Âge recommandé:</strong> {game.Age}</p>
            </div>
        </div>
    );
};

export default TestGameDetails;
