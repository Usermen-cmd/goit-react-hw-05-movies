import { Switch, Route } from 'react-router';
//Utils
import { Toaster } from 'react-hot-toast';
//Components
import { Header } from './Header/Header';
import { HomePage } from './HomePage/HomePage';
import { MoviesPage } from './MoviesPage/MoviesPage';
import { MovieCard } from './MovieCard/MovieCard';

export const MovieServis = () => {
  return (
    <>
      <Header />
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
      <Toaster position="top-right" toastOptions={{ duration: 2000 }} />
    </>
  );
};
