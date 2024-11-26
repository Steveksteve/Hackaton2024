import React, { useEffect, useState } from 'react';
import { getGames } from '../services/gameService';
import { Link } from 'react-router-dom';
import '../styles/JeuxEnVedette.css';

const JeuxEnVedette = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetchGames();
  }, []);

  const fetchGames = async () => {
    const response = await getGames();
    if (Array.isArray(response)) {
      setGames(response.slice(0, 3));
    } else {
      setGames([]);
    }
  };

  return (
    <section id="jeu-en-vedette">
      <h2>Jeux en Vedette</h2>
      <div className="card-container">
        {games.map((game) => (
          <div className="card" key={game.GameId}>
            <img src={game.GameImage} alt={game.GameName} />
            <div className="card-content">
              <h3>{game.GameName}</h3>
              <p>Origine : {game.GameCountry}</p>
              <p>{game.Description}</p>
              <Link className='button-savoir' to={`/game/${game.GameId}`}>En savoir plus</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JeuxEnVedette;
