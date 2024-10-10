import React from 'react';
import MovieList from '../../Components/MovieList/MovieList.tsx';

const MoviesContainer: React.FC = () => {
  return (
    <div className="container mt-5">
      <div className="card shadow p-3 mb-5 bg-white rounded">
        <h2 className="card-header text-center text-primary">To Watch List</h2>
        <div className="card-body">
          <MovieList/>
        </div>
      </div>
    </div>
  );
};

export default MoviesContainer;