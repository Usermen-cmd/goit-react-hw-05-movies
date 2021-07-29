import { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
//Components
import { SearchBaar } from 'Components/SearchBar/SearchBar';
import { MoviesList } from 'Components/MoviesList/MoviesList';
import Skeleton from 'react-loading-skeleton';
//Utils
import { fetchServise } from 'utils/fetchServise';
import toast from 'react-hot-toast';

const MoviesPage = () => {
  const location = useLocation();
  const history = useHistory();
  const querryHistory = new URLSearchParams(location.search).get('searchBy');
  const [querryString, setQuerry] = useState(querryHistory);
  const [films, setFilms] = useState([]);
  const [status, setStatus] = useState(true);

  useEffect(() => {
    if (querryString) {
      (() => {
        setStatus(false);
        fetchServise({
          querryString,
        })
          .then(d => {
            if (d.status === 200 && d.data.results.length > 0) {
              setFilms(d.data.results);
              setStatus(true);
              return;
            }
            throw Error();
          })
          .catch(error => {
            toast.error(
              error.message ||
                `фильмов с названием ${querryString} не найдено!`,
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
      history.push({
        ...location,
        search: `searchBy=${inputValue}`,
      });
      return;
    }
    toast.error('Строка не должна быть пустой');
  }
  return (
    <>
      <SearchBaar onSubmit={onSubmit} />
      {status ? (
        <MoviesList films={films} />
      ) : (
        <Skeleton
          count={10}
          width={300}
          style={{ display: 'block', marginTop: '10px' }}
        />
      )}
    </>
  );
};
export default MoviesPage;
