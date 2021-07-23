import { MoviesList } from 'Components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
//Utils
import { fetchServise } from 'utils/fetchServise';
import toast from 'react-hot-toast';

export const HomePage = () => {
  const [popularFilms, setPopularFilms] = useState([]);

  useEffect(() => {
    (() => {
      fetchServise({ all: true })
        .then(d => {
          if (d.status === 200) {
            setPopularFilms(d.data.results);
            return;
          }
          throw Error();
        })
        .catch(error => {
          toast.error(
            error.message ||
              'из за короновируса фильмы закончились, смотрите блогеров на ютубе',
          );
          console.log(error);
        });
    })();
  }, []);

  return <MoviesList films={popularFilms} />;
};
