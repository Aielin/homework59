import React from 'react';

interface FetchButtonProps {
  onClick: () => void;
}

const FetchButton: React.FC<FetchButtonProps> = ({ onClick }) => {
  return (
    <button type='button' className="btn btn-primary mt-3" onClick={onClick}>
      Получить новые шутки
    </button>
  );
};

export default FetchButton;