import React from 'react';

const FitnessCard = ({ name, value }) => {
  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', margin: '10px', borderRadius: '5px' }}>
      <h3>{name}</h3>
      <p>{value}</p>
    </div>

    
  );
};

export default FitnessCard;
