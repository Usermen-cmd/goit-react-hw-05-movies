import { Link, useLocation } from 'react-router-dom';
import css from './MoviesList.module.css';

export const MoviesList = ({ films, search }) => {
  const searchString = search ? `searchBy=${search}` : '';

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
                search: searchString,
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
