import React from 'react';

interface JokeDisplayProps{
  jokes: string[];
  onClick: () => void;
}

const JokeDisplay:React.FC<JokeDisplayProps> = ({ jokes, onClick }) => {
  return (
    <div>
      {jokes.length > 0 ? (
        <ul className="list-group mt-4">
          {jokes.map((joke, index) => (
            <li key={index} className="list-group-item">
              {joke}
            </li>
          ))}
        </ul>
      ) : (
        <div className="alert alert-secondary mt-4">Здесь появятся шутки...</div>
      )}

      <button type='button' className="btn btn-primary mt-3" onClick={onClick}>
        Получить новые шутки
      </button>
    </div>
  );
};

export default JokeDisplay;