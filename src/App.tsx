import MoviesContainer from './Containers/MoviesContainer/MoviesContainer.tsx';
import JokesContainer from './Containers/JokesContainer/JokesContainer.tsx';
import { useState } from 'react';

const App: React.FC = () => {
  const [page, setPage] = useState<boolean>(false);

  return (
    <div>
      <button type='button' className='btn btn-warning' onClick={() => setPage(!page)}>Change task</button>

      {page ? <MoviesContainer /> : <JokesContainer /> }

    </div>
  );
};

export default App;