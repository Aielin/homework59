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

  const deleteMovie = (index: number) => {
    setMovies(movies.filter((_, i) => i !== index));
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
          <li
            key={index}>
            {movie}
            <button onClick={() => deleteMovie(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;