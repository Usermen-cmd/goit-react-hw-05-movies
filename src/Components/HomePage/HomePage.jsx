import { MoviesList } from 'Components/MoviesList/MoviesList';

import { useState, useEffect } from 'react';

export const HomePage = () => {
  const [popularFilms, setPopularFilms] = useState([]);

  useEffect(() => {
    (() => {
      fetch(
        'https://api.themoviedb.org/3/trending/all/day?api_key=3e16f8585bb0e5d3ab479eecb997ec50',
      )
        .then(r => r.json())
        .then(d => setPopularFilms(d.results));
    })();
  }, []);

  return <MoviesList films={popularFilms} />;
};
