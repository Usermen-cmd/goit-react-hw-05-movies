import { useParams, useHistory, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const MovieCard = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [genres, setGenres] = useState([]);
  const [error, setError] = useState(null);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    (() => {
      fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=3e16f8585bb0e5d3ab479eecb997ec50&language=en-US`,
      )
        .then(r => {
          if (r.status !== 200) {
            throw Error();
          }
          return r.json();
        })
        .then(d => {
          setMovie(d);
          setGenres(d.genres.map(el => el.name));
        })
        .catch(e => setError(e));
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
