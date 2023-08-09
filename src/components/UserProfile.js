import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
  const { userId } = useParams();
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    fetch(`https://panorbit.in/api/users.json`)
      .then(response => response.json())
      .then(data => {
        const user = data.users.find(user => user.id === parseInt(userId));
        setUserDetails(user);
      });
  }, [userId]);

  if (!userDetails) {
    return <div>Loading...</div>;
  }

  const {
    name,
    username,
    email,
    profilepicture,
    phone,
    website,
    company,
    address,
  } = userDetails;

  return (
    <div className="user-profile">
      <div className="profile-header">
        <img src={profilepicture} alt={name} />
        <h2>{name}</h2>
      </div>
      <div className="profile-details">
        <h3>Username: {username}</h3>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <p>Website: {website}</p>
        <h3>Company: {company.name}</h3>
        <p>Catchphrase: {company.catchPhrase}</p>
        <p>Business: {company.bs}</p>
        <h3>Address:</h3>
        <p>Street: {address.street}</p>
        <p>Suite: {address.suite}</p>
        <p>City: {address.city}</p>
        <p>Zipcode: {address.zipcode}</p>
        <div className="google-map">
          <iframe
            title="Google Map"
            width="100%"
            height="300"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src={`https://maps.google.com/maps?q=${address.geo.lat},${address.geo.lng}&hl=es;z=14&amp;output=embed`}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;