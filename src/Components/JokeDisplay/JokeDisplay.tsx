import React from 'react';

interface JokeDisplayProps{
  joke: string;
  onClick: () => void;
}

const JokeDisplay:React.FC<JokeDisplayProps> = ({ joke, onClick }) => {
  return (
    <div>
      <div className="alert alert-secondary mt-4">
        {joke}
      </div>
      <button className="btn btn-primary mt-3" onClick={onClick}>
        Получить новую шутку
      </button>
    </div>
  );
};

export default JokeDisplay;