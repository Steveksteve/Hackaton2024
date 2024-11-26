import React, { useEffect, useState } from 'react';
import { createGame, getGames, updateGame, deleteGame } from '../services/gameService';
import '../styles/AdminPanel.css';

const GameManager = () => {
    const [games, setGames] = useState([]);
    const [newGame, setNewGame] = useState({
        GameName: '',
        GameCountry: '',
        Description: '',
        GameImage: '',
        Players: '',
        Age: ''
    });
    const [editingGame, setEditingGame] = useState(null);

    useEffect(() => {
        fetchGames();
    }, []);

    const fetchGames = async () => {
        const response = await getGames();
        if (Array.isArray(response)) {
            setGames(response);
        } else {
            setGames([]);
        }
    };

    const handleCreateGame = async () => {
        await createGame(newGame);
        setNewGame({
            GameName: '',
            GameCountry: '',
            Description: '',
            GameImage: '',
            Players: '',
            Age: ''
        });
        fetchGames();
    };

    const handleUpdateGame = async () => {
        await updateGame(editingGame);
        setEditingGame(null);
        fetchGames();
    };

    const handleDeleteGame = async (id) => {
        await deleteGame(id);
        fetchGames();
    };

    return (
        <div className="admin-container">
            <h2>Manage Games</h2>
            <div className="form-container">
                <input
                    type="text"
                    placeholder="Game Name"
                    value={newGame.GameName}
                    onChange={(e) => setNewGame({ ...newGame, GameName: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Country"
                    value={newGame.GameCountry}
                    onChange={(e) => setNewGame({ ...newGame, GameCountry: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={newGame.Description}
                    onChange={(e) => setNewGame({ ...newGame, Description: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Image URL"
                    value={newGame.GameImage}
                    onChange={(e) => setNewGame({ ...newGame, GameImage: e.target.value })}
                />
                <input
                    type="number"
                    placeholder="Players"
                    value={newGame.Players}
                    onChange={(e) => setNewGame({ ...newGame, Players: e.target.value })}
                />
                <input
                    type="number"
                    placeholder="Age"
                    value={newGame.Age}
                    onChange={(e) => setNewGame({ ...newGame, Age: e.target.value })}
                />
                <button onClick={handleCreateGame}>Create Game</button>
            </div>
            <div className="list-container">
                <h3>Game List</h3>
                <ul>
                    {games.map((game) => (
                        <li key={game.GameId}>
                            {editingGame && editingGame.GameId === game.GameId ? (
                                <div>
                                    <input
                                        type="text"
                                        value={editingGame.GameName}
                                        onChange={(e) => setEditingGame({ ...editingGame, GameName: e.target.value })}
                                    />
                                    <input
                                        type="text"
                                        value={editingGame.GameCountry}
                                        onChange={(e) => setEditingGame({ ...editingGame, GameCountry: e.target.value })}
                                    />
                                    <input
                                        type="text"
                                        value={editingGame.Description}
                                        onChange={(e) => setEditingGame({ ...editingGame, Description: e.target.value })}
                                    />
                                    <input
                                        type="text"
                                        value={editingGame.GameImage}
                                        onChange={(e) => setEditingGame({ ...editingGame, GameImage: e.target.value })}
                                    />
                                    <input
                                        type="number"
                                        value={editingGame.Players}
                                        onChange={(e) => setEditingGame({ ...editingGame, Players: e.target.value })}
                                    />
                                    <input
                                        type="number"
                                        value={editingGame.Age}
                                        onChange={(e) => setEditingGame({ ...editingGame, Age: e.target.value })}
                                    />
                                    <button onClick={handleUpdateGame}>Update</button>
                                    <button onClick={() => setEditingGame(null)}>Cancel</button>
                                </div>
                            ) : (
                                <div>
                                    {game.GameName} - {game.GameCountry} - {game.Description} - {game.Players} Players - Age {game.Age}
                                    <button onClick={() => setEditingGame(game)}>Edit</button>
                                    <button onClick={() => handleDeleteGame(game.GameId)}>Delete</button>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default GameManager;
