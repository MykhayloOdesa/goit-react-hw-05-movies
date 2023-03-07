import PropTypes from 'prop-types';

export default function Review({ reviews }) {
  return (
    <ul>
      {reviews.length > 0 ? (
        reviews.map(({ id, author, content }) => (
          <li key={id}>
            <p>{author}</p>
            <p>{content}</p>
          </li>
        ))
      ) : (
        <h2>Sorry, we don't have any reviews about this movie</h2>
      )}
    </ul>
  );
}

Review.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};
