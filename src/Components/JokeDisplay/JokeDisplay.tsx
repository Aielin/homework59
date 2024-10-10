import React from 'react';
import FetchButton from '../FetchButton/FetchButton.tsx';

interface JokeDisplayProps{
  jokes: string[];
  onClick: () => void;
}

const JokeDisplay:React.FC<JokeDisplayProps> = ({ jokes, onClick }) => {
  return (
    <div>
      {jokes.length > 0 ? (
        <ul className='list-group mb-4'>
          {jokes.map((joke, index) => (
            <li key={index} className="list-group-item bg-light">
              {joke}
            </li>
          ))}
        </ul>
      ) : (
        <div className='alert alert-secondary mt-4'>Здесь появятся шутки...</div>
      )}
      <div className='text-center'>
        <FetchButton onClick={onClick}/>
      </div>
    </div>
  );
};

export default JokeDisplay;