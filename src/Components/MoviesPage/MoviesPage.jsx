import { SearchBaar } from 'Components/SearchBar/SearchBar';
import { MoviesList } from 'Components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchServise } from 'utils/fetchServise';
import toast from 'react-hot-toast';

export const MoviesPage = () => {
  const location = useLocation();
  const querryHistory = new URLSearchParams(location.search).get('searchBy');

  const [querryString, setQuerry] = useState(querryHistory);
  const [films, setFilms] = useState([]);

  useEffect(() => {
    if (querryString) {
      (() => {
        fetchServise({
          querryString,
        })
          .then(d => {
            if (d.status === 200 && d.data.results.length > 0) {
              setFilms(d.data.results);
              return;
            }
            throw Error();
          })
          .catch(error => {
            toast.error(
              error.message || `филма с названием ${querryString} не найдено!`,
            );
            console.log(error);
          });
      })();
    }
  }, [querryString]);

  function onSubmit(event, inputValue) {
    event.preventDefault();
    if (inputValue) {
      setQuerry(inputValue);
      return;
    }
    toast.error('Строка не должна быть пустой');
  }
  return (
    <>
      <SearchBaar onSubmit={onSubmit} />
      <MoviesList films={films} search={querryString} />
    </>
  );
};
