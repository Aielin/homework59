import MoviesContainer from './Containers/MoviesContainer/MoviesContainer.tsx';
import JokesContainer from './Containers/JokesContainer/JokesContainer.tsx';

const App: React.FC = () => {
  return (
    <div>
      <MoviesContainer />
      <JokesContainer />
    </div>
  );
};

export default App;