import { Link, useLocation } from 'react-router-dom';

export const MoviesList = ({ films, search }) => {
  const location = useLocation();
  return (
    <ul>
      {films.map(el => {
        return (
          <Link
            to={{
              pathname: `/Movie/${el.id}`,
              state: { from: location },
              search: `searchBy=${search}`,
            }}
            key={el.id}
          >
            <li>{el.title}</li>
          </Link>
        );
      })}
    </ul>
  );
};
