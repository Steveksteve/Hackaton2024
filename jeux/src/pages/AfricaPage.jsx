import React from 'react';
import { useEffect, useState } from 'react';
import { getGames } from '../services/gameService';
import '../styles/Europe.css';

function Africa() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const data = await getGames();
        const europeanGame = data.filter(games => games.GameCountry === 'Afrique');
        setGames(europeanGame);
      } catch (error) {
        console.error("Failed to fetch games:", error);
      }
    };
    fetchGames();
  }, []);

  return (
    <div className="europe-page">
      <header className="header">
        <div className="header-content">
          <img src="/path/to/europe-map-image.jpg" alt="Afrique" className="header-image" />
          <div className="header-text">
            <h1>AFRIQUE</h1>
            <p>
              Les Jeux traditionnels venant du continent africain reflète les valeurs et les compétences sociétales
            </p>
          </div>
        </div>
      </header>
      <main className="main-content">
        <div className="games-list">
          {games.map(games => (
            <div key={games.GamesId} className="game-item">
              <img src={games.GameImage} alt={games.GamesName} className="game-image" />
              <h3 className="game-title">{games.GamesName}</h3>
              <p className="game-description">{games.Description}</p>
            </div>
          ))}
        </div>
        <button className="load-more-button">Voir plus</button>
      </main>

    </div>
  );
}

export default Africa;
