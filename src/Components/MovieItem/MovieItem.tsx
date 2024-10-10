import React from 'react';

interface MovieItemProps {
  id: number;
  value: string;
  onDelete: (id: number) => void;
  onUpdate: (id: number, newValue: string) => void;
}

const MovieItem:React.FC<MovieItemProps> = React.memo(({ id, value, onDelete, onUpdate }) => {
  return (
    <li>
      <input
        type="text"
        value={value}
        onChange={(e) => onUpdate(id, e.target.value)}
      />
  <button onClick={() => onDelete(id)}>Удалить</button>
  </li>
  );
}, (prevProps, nextProps) => {
    return (
      prevProps.value === nextProps.value &&
      prevProps.onDelete === nextProps.onDelete &&
      prevProps.onUpdate === nextProps.onUpdate
    );
  });

export default MovieItem;