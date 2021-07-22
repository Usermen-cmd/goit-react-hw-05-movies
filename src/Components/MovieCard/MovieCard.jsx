import { useParams } from 'react-router';
import { useState, useEffect } from 'react';

export const MovieCard = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    (() => {
      fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=3e16f8585bb0e5d3ab479eecb997ec50&language=en-US`,
      )
        .then(r => r.json())
        .then(d => {
          setMovie(d);
          setGenres(d.genres.map(el => el.name));
        });
    })();
  }, [movieId]);

  return (
    <>
      {movie && <h2>{movie.title}</h2>}
      {movie && (
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt=""
        />
      )}
      <h3>Overview</h3>
      {movie && <p>{movie.overview}</p>}
      <h3>Genres</h3>
      {movie && <p>{genres.join(' ')}</p>}
    </>
  );
};
