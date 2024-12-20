import React from 'react';

function UserList({ users, onDelete, onEdit }) {
  return (
    <div className="user-list">
      {users.map(user => (
        <div key={user.id} className="user-card">
          <div className="user-info">
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
          <div className="button-group">
            <button className="btn btn-primary" onClick={() => onEdit(user)}>
              Edit
            </button>
            <button className="btn btn-danger" onClick={() => onDelete(user.id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
export default UserList;
