import { useParams, useHistory, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchServise } from 'utils/fetchServise';
import toast from 'react-hot-toast';

export const MovieCard = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [genres, setGenres] = useState([]);
  const [error, setError] = useState(null);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    (() => {
      fetchServise({ movieId })
        .then(d => {
          if (d.status === 200) {
            setMovie(d.data);
            setGenres(d.data.genres.map(el => el.name));
            return;
          }
          throw Error();
        })
        .catch(error => {
          toast.error(error.messsage);
          setError(error);
          console.log(error);
        });
    })();
  }, [movieId]);

  function goBack() {
    if (location.state.from.pathname === '/Movies') {
      const search = location.search;
      history.push(`/Movies${search}`);
      return;
    }
    history.goBack();
  }

  return (
    <>
      {movie && (
        <>
          <button type="button" onClick={goBack}>
            back
          </button>
          <div style={{ display: 'flex' }}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <div>
              <h2>{movie.title}</h2>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h3>Genres</h3>
              <p>{genres.join(' ')}</p>
            </div>
          </div>
        </>
      )}
      {error && <p>404 error page not found</p>}
    </>
  );
};
