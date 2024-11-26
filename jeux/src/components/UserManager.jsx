import React, { useEffect, useState } from 'react';
import { createUser, getUsers, updateUser, deleteUser } from '../services/userService';
import '../styles/AdminPanel.css'; 

const UserManager = () => {
    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState({ username: '', email: '', password: '', permission: 'visiteur', date_of_birth: '' });
    const [editingUser, setEditingUser] = useState(null);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        const users = await getUsers();
        setUsers(users);
    };

    const handleCreateUser = async () => {
        await createUser(newUser);
        setNewUser({ username: '', email: '', password: '', permission: 'visiteur', date_of_birth: '' });
        fetchUsers();
    };

    const handleUpdateUser = async () => {
        await updateUser(editingUser);
        setEditingUser(null);
        fetchUsers();
    };

    const handleDeleteUser = async (id) => {
        await deleteUser(id);
        fetchUsers();
    };

    return (
        <div className="manager-container">
            <h2>Manage Users</h2>
            <div className="form-group">
                <input
                    type="text"
                    placeholder="Username"
                    value={newUser.username}
                    onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={newUser.email}
                    onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={newUser.password}
                    onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                />
                <select
                    value={newUser.permission}
                    onChange={(e) => setNewUser({ ...newUser, permission: e.target.value })}
                >
                    <option value="visiteur">Visiteur</option>
                    <option value="inscrit">Inscrit</option>
                    <option value="admin">Admin</option>
                </select>
                <input
                    type="date"
                    placeholder="Date of Birth"
                    value={newUser.date_of_birth}
                    onChange={(e) => setNewUser({ ...newUser, date_of_birth: e.target.value })}
                />
                <button onClick={handleCreateUser}>Create User</button>
            </div>
            <div>
                <h3>User List</h3>
                <ul>
                    {users.map(user => (
                        <li key={user.id} className="item-container">
                            {editingUser && editingUser.id === user.id ? (
                                <div>
                                    <input
                                        type="text"
                                        value={editingUser.username}
                                        onChange={(e) => setEditingUser({ ...editingUser, username: e.target.value })}
                                    />
                                    <input
                                        type="email"
                                        value={editingUser.email}
                                        onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })}
                                    />
                                    <input
                                        type="password"
                                        value={editingUser.password}
                                        onChange={(e) => setEditingUser({ ...editingUser, password: e.target.value })}
                                    />
                                    <select
                                        value={editingUser.permission}
                                        onChange={(e) => setEditingUser({ ...editingUser, permission: e.target.value })}
                                    >
                                        <option value="visiteur">Visiteur</option>
                                        <option value="inscrit">Inscrit</option>
                                        <option value="admin">Admin</option>
                                    </select>
                                    <input
                                        type="date"
                                        value={editingUser.date_of_birth}
                                        onChange={(e) => setEditingUser({ ...editingUser, date_of_birth: e.target.value })}
                                    />
                                    <button className="edit-button" onClick={handleUpdateUser}>Update</button>
                                    <button onClick={() => setEditingUser(null)}>Cancel</button>
                                </div>
                            ) : (
                                <div className="item-container">
                                    <div>
                                        {user.username} - {user.email} - {user.permission} - {user.date_of_birth}
                                    </div>
                                    <div>
                                        <button className="edit-button" onClick={() => setEditingUser(user)}>Edit</button>
                                        <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                                    </div>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default UserManager;
