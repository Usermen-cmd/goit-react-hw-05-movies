import { Switch, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
//Utils
import { Toaster } from 'react-hot-toast';
//Components
import { LinearProgress } from '@material-ui/core';
import Header from './Header/Header';
const HomePage = lazy(() => import('./HomePage/HomePage'));
const MoviesPage = lazy(() => import('./MoviesPage/MoviesPage'));
const MovieCard = lazy(() => import('./MovieCard/MovieCard'));

export const MovieServis = () => {
  return (
    <>
      <Header />
      <Switch>
        <Suspense fallback={<LinearProgress />}>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/Movies">
            <MoviesPage />
          </Route>
          <Route path="/Movie/:movieId">
            <MovieCard />
          </Route>
        </Suspense>
      </Switch>
      <Toaster position="top-right" toastOptions={{ duration: 2000 }} />
    </>
  );
};
