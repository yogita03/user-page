import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import UserCard from './UserCard';

const LandingPage = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    fetch('https://panorbit.in/api/users.json')
      .then(response => response.json())
      .then(data => setUsers(data.users));
  }, []);

  const handleSelectUser = (userId) => {
    navigate(`/profile/${userId}`); 
  };

  return (
    <div className="landing-page">
      <h1>User Accounts</h1>
      <div className="user-card-container">
        {users.map(user => (
          <UserCard key={user.id} user={user} onSelectUser={handleSelectUser} />
        ))}
      </div>
    </div>
  );
};

export default LandingPage;