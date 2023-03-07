import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getMoviesBySearch } from 'services/serviceAPI';

import Searchbar from 'components/Searchbar/Searchbar';
import List from 'components/List/List';
import Loader from 'components/Loader/Loader';

export default function Movies() {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const search = searchParams.get('search');

  useEffect(() => {
    setLoading(true);

    if (search?.trim() === '') {
      alert('Please insert correct data!');
    }

    getMoviesBySearch(search)
      .then(setMovies)
      .catch(error => console.log(error))
      .finally(setLoading(false));
  }, [search]);

  const onSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;
    setSearchParams({ search: form.elements.search.value });
    form.reset();
  };

  return (
    <>
      <Searchbar onSubmit={onSubmit} />
      {loading && <Loader />}
      {search && <List movies={movies} />}
    </>
  );
}
