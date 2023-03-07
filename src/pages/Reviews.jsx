import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getReviews } from 'services/serviceAPI';

import Review from 'components/Review';

export default function Reviews() {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getReviews(movieId)
      .then(result => {
        setReviews(result);
      })
      .catch(error => console.log(error));
  }, [movieId, reviews]);

  return <>{reviews && <Review reviews={reviews} />}</>;
}
