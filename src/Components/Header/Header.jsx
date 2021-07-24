import { NavLink } from 'react-router-dom';
//Styles
import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.header}>
      <NavLink
        exact
        to="/"
        className={css.link}
        activeClassName={css.activeLink}
      >
        Home
      </NavLink>
      <NavLink
        to="/Movies"
        className={css.link}
        activeClassName={css.activeLink}
      >
        Movies
      </NavLink>
    </header>
  );
};

export default Header;
