import React from 'react';

const UserCard = ({ user, onSelectUser }) => {
  return (
    <div className="user-card" onClick={() => onSelectUser(user.id)}>
      <img className="user-image" src={user.profilepicture} alt={user.name} />
      <p className="user-name">{user.name}</p>
    </div>
  );
};

export default UserCard;