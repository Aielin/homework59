import React, { useCallback, useState, useEffect } from 'react';
import MovieItem from '../MovieItem/MovieItem.tsx';

const MovieList: React.FC = () => {
  const [movies, setMovies] = useState<{ id:number; title:string}[]>([]);
  const [newMovie, setNewMovie] = useState('');

  useEffect(() => {
    const storedMovies = localStorage.getItem('movies');
    if (storedMovies) {
      setMovies(JSON.parse(storedMovies));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('movies', JSON.stringify(movies));
  }, [movies]);

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

  const updateMovie = useCallback((id: number, updatedValue: string) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) => (movie.id === id ? { ...movie, title: updatedValue } : movie))
    );
  }, []);

  return (
    <div>
      <h2>To watch list:</h2>
      <div>
        <input className='form-control mb-2'
          type="text"
          value={newMovie}
          onChange={(e) => setNewMovie(e.target.value)}
          placeholder="Add new movie title"
        />
        <button type='button' className='btn btn-primary w-100' onClick={addMovie}>Add</button>
      </div>

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