import { useState, useEffect } from 'react';

import { getTrendingMovie } from 'services/serviceAPI';
import List from 'components/List/List';
import Loader from 'components/Loader/Loader';

export default function Homepage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    getTrendingMovie()
      .then(data => setMovies(data.results))
      .catch(error => console.log(error))
      .finally(setLoading(false));
  }, []);

  return (
    <main>
      {loading && <Loader />}
      <h2 style={{ textAlign: 'center', margin: '15px' }}>Trending Movies</h2>
      {<List movies={movies} />}
    </main>
  );
}
