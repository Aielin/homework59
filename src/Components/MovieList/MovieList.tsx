import React, { useCallback, useState } from 'react';
import MovieItem from '../MovieItem/MovieItem.tsx';

const MovieList: React.FC = () => {
  const [movies, setMovies] = useState<{ id:number; title:string}[]>([]);
  const [newMovie, setNewMovie] = useState('');

  const addMovie = () => {
    if (newMovie.trim()) {
      setMovies([...movies, { id: new Date().getTime(), title: newMovie }]);
      setNewMovie('');
    }
  };

  const deleteMovie = useCallback(
    (id: number) => {
      setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id));
    },[setMovies]
  );

  const updateMovie = useCallback(
    (id: number, updatedValue: string) => {
      setMovies((prevMovies) =>
        prevMovies.map((movie) =>
          movie.id === id ? { ...movie, title: updatedValue } : movie
        )
      );
    }, [setMovies]
  );

  return (
    <div>
      <h2>To watch list:</h2>
      <input
        type="text"
        value={newMovie}
        onChange={(e) => setNewMovie(e.target.value)}
        placeholder="Add new movie title"
      />
      <button onClick={addMovie}>Add</button>

      <ul>
        {movies.map((movie) => (
          <MovieItem
            key={movie.id}
            id={movie.id}
            value={movie.title}
            onDelete={deleteMovie}
            onUpdate={updateMovie}
          />
        ))}
      </ul>
    </div>
  );
};

export default MovieList;