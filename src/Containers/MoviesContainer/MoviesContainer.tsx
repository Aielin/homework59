import React from 'react';
import MovieList from '../../Components/MovieList/MovieList.tsx';

const MoviesContainer: React.FC = () => {
  return (
    <div className="container mt-5">
      <MovieList />
    </div>
  );
};

export default MoviesContainer;