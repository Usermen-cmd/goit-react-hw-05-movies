import { Header } from './Header/Header';
import { Switch, Route } from 'react-router';
import { HomePage } from './HomePage/HomePage';
import { MoviesPage } from './MoviesPage/MoviesPage';
import { MovieCard } from './MovieCard/MovieCard';

export const MovieServis = () => {
  return (
    <>
      <Header />
      <br />
      <hr />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/Movies">
          <MoviesPage />
        </Route>
        <Route path="/Movie/:movieId">
          <MovieCard />
        </Route>
      </Switch>
    </>
  );
};
