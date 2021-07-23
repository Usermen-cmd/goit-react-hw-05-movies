import axios from 'axios';

export const cancelTokenSourse = axios.CancelToken.source();

const fetchFilms = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '3e16f8585bb0e5d3ab479eecb997ec50',
    language: 'en-US',
  },
});

export const fetchServise = ({
  all = false,
  querryString = false,
  movieId = false,
}) => {
  const canselOptions = {
    cancelToken: cancelTokenSourse.token,
  };

  if (all) {
    return fetchFilms.get('trending/all/day', canselOptions);
  }
  if (querryString) {
    return fetchFilms.get(`search/movie?query=${querryString}`, canselOptions);
  }
  if (movieId) {
    return fetchFilms.get(`movie/${movieId}`, canselOptions);
  }
};
