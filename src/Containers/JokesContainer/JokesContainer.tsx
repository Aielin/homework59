import React, { useEffect, useState } from 'react';
import JokeDisplay from '../../Components/JokeDisplay/JokeDisplay.tsx';

const JokesContainer:React.FC = () => {
  const [joke, setJoke] = useState('Здесь появится шутка...');

  const fetchJoke = () => {
    fetch('https://api.chucknorris.io/jokes/random')
      .then((response) => response.json())
      .then((data) => {
        setJoke(data.value); // Обновляем состояние шутки из API
      })
      .catch((error) => {
        console.error('Ошибка при получении шутки:', error);
      });
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="container">
      <h2>Random Joke Generator</h2>
      <JokeDisplay joke={joke} onClick={fetchJoke}/>
    </div>
  );
};

export default JokesContainer;