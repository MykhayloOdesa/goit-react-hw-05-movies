import PropTypes from 'prop-types';
import GoBackButton from 'components/GoBackButton';

export default function MovieDetails({ movie }) {
  return (
    movie && (
      <>
        <GoBackButton text="Go back" />
        <div style={{ display: 'flex' }}>
          <img
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt={movie.original_title}
            width="300"
            height="300"
          />

          <div>
            <h2>
              {movie.original_title} ({movie.release_date.slice(0, 4)})
            </h2>
            <h2>User Scores: {Math.round(movie.popularity)}%</h2>
            <h2>Overview</h2>
            <p>{movie.overview}</p>
            <h2>Genres</h2>
            <p>
              {movie.genres?.map(({ id, name }) => (
                <li key={id}>{name}</li>
              ))}
            </p>
          </div>
        </div>
      </>
    )
  );
}

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    original_title: PropTypes.string.isRequired,
    popularity: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
  }),
};
