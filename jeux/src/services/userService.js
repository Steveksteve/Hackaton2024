const API_URL = 'http://localhost/jeux/php';

export const getUsers = async () => {
    try {
        const response = await fetch(`${API_URL}/read_users.php`);
        return await response.json();
    } catch (error) {
        console.error('Error fetching users:', error);
        return [];
    }
};

export const createUser = async (user) => {
    try {
        await fetch(`${API_URL}/create_user.php`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });
    } catch (error) {
        console.error('Error creating user:', error);
    }
};

export const updateUser = async (user) => {
    try {
        await fetch(`${API_URL}/update_user.php`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });
    } catch (error) {
        console.error('Error updating user:', error);
    }
};

export const deleteUser = async (id) => {
    try {
        await fetch(`${API_URL}/delete_user.php`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id }),
        });
    } catch (error) {
        console.error('Error deleting user:', error);
    }
};

// Fonctions pour les jeux
export const getGames = async () => {
    try {
        const response = await fetch(`${API_URL}/read_games.php`);
        return await response.json();
    } catch (error) {
        console.error('Error fetching games:', error);
        return [];
    }
};

export const createGame = async (game) => {
    try {
        await fetch(`${API_URL}/create_game.php`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(game),
        });
    } catch (error) {
        console.error('Error creating game:', error);
    }
};

export const updateGame = async (game) => {
    try {
        await fetch(`${API_URL}/update_game.php`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(game),
        });
    } catch (error) {
        console.error('Error updating game:', error);
    }
};

export const deleteGame = async (id) => {
    try {
        await fetch(`${API_URL}/delete_game.php`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id }),
        });
    } catch (error) {
        console.error('Error deleting game:', error);
    }
};
