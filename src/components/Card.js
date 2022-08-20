import React from "react";

const card = ({ id, name, email }) => {
  return (
    <div className="robot-card">
      <img alt='robot' src={`https://joeschmoe.io/api/v1/${name}`} />
      <p>{name}</p>
      <p>{email}</p>
    </div>
  );
};

export default card;