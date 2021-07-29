import { Link, useLocation } from 'react-router-dom';
//Styles
import css from './MoviesList.module.css';
//Utils
import PropTypes from 'prop-types';

export const MoviesList = ({ films }) => {
  const location = useLocation();
  return (
    <ul className={css.list}>
      {films.map(el => {
        return (
          <li key={el.id}>
            <Link
              className={css.link}
              to={{
                pathname: `/Movie/${el.id}`,
                state: { from: location },
              }}
            >
              {el.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
MoviesList.propType = {
  search: PropTypes.string,
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ),
};
