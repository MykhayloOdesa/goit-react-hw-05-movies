import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

export default function List({ movies }) {
  const location = useLocation();

  return (
    <ul>
      {movies &&
        movies.map(({ id, poster_path, original_title, title }) => (
          <li key={id}>
            <Link state={{ from: location }} to={`/movies/${id}`}>
              <img
                src={`https://image.tmdb.org/t/p/original${poster_path}`}
                alt={original_title}
                width="300"
                height="300"
              />

              <span style={{ fontSize: '12px' }}>{title}</span>
            </Link>
          </li>
        ))}
    </ul>
  );
}

List.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
      original_title: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
