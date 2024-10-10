import React, { useEffect, useState } from 'react';
import JokeDisplay from '../../Components/JokeDisplay/JokeDisplay.tsx';

const JokesContainer:React.FC = () => {
  const [jokes, setJokes] = useState<string[]>([]);

  const fetchMultipleJokes = () => {
    const jokePromises = Array(3)
      .fill(null)
      .map(() => fetch('https://api.chucknorris.io/jokes/random').then((res) => res.json()));

    Promise.all(jokePromises)
      .then((data) => {
        const jokesArray = data.map((joke) => joke.value);
        setJokes(jokesArray);
      })
      .catch((error) => {
        console.error('Ошибка при получении шуток:', error);
      });
  };

  useEffect(() => {
    if(jokes.length === 0){
      fetchMultipleJokes();
    }
  },);

  return (
    <div className="container">
      <h2>Joke Generator</h2>
      <JokeDisplay jokes={jokes} onClick={fetchMultipleJokes} />
    </div>
  );
};

export default JokesContainer;