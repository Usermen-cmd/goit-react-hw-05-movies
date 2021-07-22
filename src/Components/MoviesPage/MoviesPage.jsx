import { SearchBaar } from 'Components/SearchBar/SearchBar';
import { MoviesList } from 'Components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const MoviesPage = () => {
  const location = useLocation();
  console.log(location.search);
  const querryHistory = new URLSearchParams(location.search).get('byName');

  const [querry, setQuerry] = useState(querryHistory);
  const [films, setFilms] = useState([]);

  useEffect(() => {
    if (querry) {
      (() => {
        fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=3e16f8585bb0e5d3ab479eecb997ec50&query=${querry}`,
        )
          .then(r => r.json())
          .then(d => setFilms(d.results));
      })();
    }
  }, [querry]);

  function onSubmit(event, inputValue) {
    event.preventDefault();
    setQuerry(inputValue);
  }
  return (
    <>
      <SearchBaar onSubmit={onSubmit} />
      <MoviesList films={films} search={querry} />
    </>
  );
};
