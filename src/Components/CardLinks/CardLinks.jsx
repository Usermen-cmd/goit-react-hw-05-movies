import { NavLink, useLocation, useRouteMatch } from 'react-router-dom';
//Styles
import css from './CardLinks.module.css';

export const CardLinks = () => {
  const location = useLocation();
  const { url } = useRouteMatch();
  return (
    <div className={css.linkWrapper}>
      <NavLink
        className={css.link}
        activeClassName={css.activeLink}
        to={{
          pathname: `${url}/Cast`,
          state: { from: location.state.from },
        }}
      >
        Cast
      </NavLink>
      <NavLink
        exact
        className={css.link}
        activeClassName={css.activeLink}
        to={{
          pathname: `${url}/Reviews`,
          state: { from: location.state.from },
        }}
      >
        Reviews
      </NavLink>
    </div>
  );
};
