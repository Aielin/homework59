import { useState } from 'react';

const MovieList: React.FC = () => {
  const [movies, setMovies] = useState<string[]>([]);
  const [newMovie, setNewMovie] = useState('');

  const addMovie = () => {
    if (newMovie.trim()) {
      setMovies([...movies, newMovie]);
      setNewMovie('');
    }
  };

  return (
    <div>
      <h2>To watch list:</h2>
      <input
        type="text"
        value={newMovie}
        onChange={(e) => setNewMovie(e.target.value)}
        placeholder="Add new movie"
      />
      <button onClick={addMovie}>Add</button>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>{movie}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;