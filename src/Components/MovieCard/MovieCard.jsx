import { useParams, Switch, Route, useRouteMatch } from 'react-router-dom';
import { useState, useEffect } from 'react';
//Components
import { Cast } from 'Components/Cast/Cast';
import { Review } from 'Components/Review/Review';
import { CardDescription } from 'Components/CardDescription/CardDescription';
import { CardLinks } from 'Components/CardLinks/CardLinks';
//Utils
import toast from 'react-hot-toast';
import { fetchServise } from 'utils/fetchServise';

const MovieCard = () => {
  const { path } = useRouteMatch();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [genres, setGenres] = useState([]);
  const [error, setError] = useState(null);

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

  return (
    <>
      {movie && (
        <>
          <CardDescription movie={movie} genres={genres} />
          <CardLinks />
        </>
      )}

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
export default MovieCard;
