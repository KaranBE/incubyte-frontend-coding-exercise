import React, { useState, useEffect } from 'react';
import UserList from './components/UserList';
import UserForm from './components/UserForm';

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch('http://localhost:3001/users');
    const data = await response.json();    
    setUsers(data);
  };

  const handleDelete = async (id) => {
    const response = await fetch(`http://localhost:3001/users/${id}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      setUsers(users.filter(user => user.id !== id));
    }
  };

  const handleSubmit = async (userData) => {
    const method = selectedUser ? 'PATCH' : 'POST';
    const url = selectedUser ? `http://localhost:3001/users/${selectedUser.id}` : 'http://localhost:3001/users';
    
    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    
    const data = await response.json();
    
    if (response.ok) {
      fetchUsers();
      setSelectedUser(null);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User Management</h1>
      <UserForm 
        onSubmit={handleSubmit}
        initialData={selectedUser}
      />
      <UserList 
        users={users}
        onDelete={handleDelete}
        onEdit={setSelectedUser}
      />
    </div>
  );
}

export default App;
