import { useState, useEffect } from 'react';
//Utils
import { fetchServise } from 'utils/fetchServise';
import toast from 'react-hot-toast';
//Components
import { MoviesList } from 'Components/MoviesList/MoviesList';
import Skeleton from 'react-loading-skeleton';

const HomePage = () => {
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

  return popularFilms.length > 0 ? (
    <MoviesList films={popularFilms} />
  ) : (
    <Skeleton
      count={10}
      width={300}
      style={{ display: 'block', marginTop: '10px' }}
    />
  );
};
export default HomePage;
