import { Header } from './Header/Header';
import { Switch, Route } from 'react-router';
import { HomePage } from './HomePage/HomePage';
import { MoviesPage } from './MoviesPage/MoviesPage';

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
        <Route path="/Movies">
          <MoviesPage />
        </Route>
      </Switch>
    </>
  );
};
