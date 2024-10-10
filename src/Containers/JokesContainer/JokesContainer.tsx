import React, { useState } from 'react';
import JokeDisplay from '../../Components/JokeDisplay/JokeDisplay.tsx';

const JokesContainer:React.FC = () => {
  const [joke, setJoke] = useState('Здесь появится шутка...');

  const fetchJoke = () => {
    setJoke('Шутка обновлена!');
  };

  return (
    <div className="container">
      <h2>Random Joke Generator</h2>
      <JokeDisplay joke={joke} onClick={fetchJoke}/>
    </div>
  );
};

export default JokesContainer;