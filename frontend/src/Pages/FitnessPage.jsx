import React from 'react';
import FitnessCard from '../components/FitnessCard';

const FitnessPage = () => {
  return (
    <div >
      <h1 className="text-4xl font-extrabold mb-6">Your Fitness Stats</h1>
      <FitnessCard name="Steps Walked" value="7500 steps" />
      <FitnessCard name="Calories Burned" value="350 kcal" />
      <FitnessCard name="Workout Time" value="45 minutes" />
    </div>
  );
};

export default FitnessPage;
