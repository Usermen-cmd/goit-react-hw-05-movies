import {
  useParams,
  useHistory,
  useLocation,
  NavLink,
  Switch,
  Route,
  useRouteMatch,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
//Components
import { BiArrowBack } from 'react-icons/bi';
import { Cast } from 'Components/Cast/Cast';
import { Review } from 'Components/Review/Review';
//Utils
import toast from 'react-hot-toast';
import { fetchServise } from 'utils/fetchServise';
//Styles
import css from './MovieCard.module.css';

export const MovieCard = () => {
  const { path, url } = useRouteMatch();
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
    console.log(location);
    if (location.state.from.pathname.includes('/Movie')) {
      const search = location.search;
      history.push(`/Movies${search}`);
      return;
    }
    history.goBack();
  }

  return (
    <>
      {movie && (
        <div className={css.container}>
          <button type="button" onClick={goBack} className={css.backBtn}>
            <BiArrowBack style={{ marginRight: '10px' }} size="18px" />
            Back
          </button>
          <div className={css.movieWrapper}>
            <img
              className={css.movieImage}
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
            />
            <div className={css.contentWrapper}>
              <h2 className={css.primaryHeader}>{movie.title}</h2>
              <h3 className={css.secondryHeader}>Overview</h3>
              <p className={css.movieText}>{movie.overview}</p>
              <h3 className={css.secondryHeader}>Genres</h3>
              <p className={css.movieText}>{genres.join(' ')}</p>
            </div>
          </div>
        </div>
      )}
      <div className={css.linkWrapper}>
        <NavLink
          className={css.link}
          activeClassName={css.activeLink}
          to={{
            pathname: `${url}/Casts`,
            state: { from: location },
            search: location.search,
          }}
          style={{ display: 'block' }}
        >
          Casts
        </NavLink>
        <NavLink
          exact
          className={css.link}
          activeClassName={css.activeLink}
          to={{
            pathname: `${url}/Reviews`,
            state: { from: location },
            search: location.search,
          }}
          style={{ display: 'block' }}
        >
          Reviews
        </NavLink>
      </div>
      <Switch>
        <Route path={`${path}/Casts`}>
          <Cast movieId={movieId} />
        </Route>
        <Route path={`${path}/Reviews`}>
          <Review movieId={movieId} />
        </Route>
      </Switch>
      {error && <p>404 error page not found</p>}
    </>
  );
};
