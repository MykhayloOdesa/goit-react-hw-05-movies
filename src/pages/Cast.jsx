import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getActors } from 'services/serviceAPI';

import Actors from 'components/Actors/Actors';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getActors(movieId)
      .then(data => {
        setCast(data);
      })
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <>
      <Actors cast={cast} />
    </>
  );
}
