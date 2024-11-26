export const getGames = async () => {
    const response = await fetch('http://localhost/jeux/php/read_games.php');
    const data = await response.json();
    return data;
  };
  
  export const createGame = async (game) => {
    await fetch('http://localhost/jeux/php/create_game.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(game),
    });
  };
  
  export const updateGame = async (game) => {
    await fetch('http://localhost/jeux/php/update_game.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(game),
    });
  };
  
  export const deleteGame = async (id) => {
    await fetch('http://localhost/jeux/php/delete_game.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ GameId: id }),
    });
  };
  