import PropTypes from 'prop-types';

export default function Actors({ cast }) {
  return (
    <ul>
      {cast &&
        cast.map(({ id, name, profile_path, character }) => (
          <li key={id}>
            <img
              src={
                profile_path &&
                `https://image.tmdb.org/t/p/original${profile_path}`
              }
              alt={name}
              width="300"
              height="300"
            />
            <h2>{name}</h2>
            <p>Character: {character}</p>
          </li>
        ))}
    </ul>
  );
}

Actors.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      profile_path: PropTypes.string,
      character: PropTypes.string.isRequired,
    })
  ),
};
