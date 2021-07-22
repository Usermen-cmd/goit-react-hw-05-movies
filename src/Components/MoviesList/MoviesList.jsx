import { Link } from 'react-router-dom';

export const MoviesList = ({ films }) => {
  return (
    <ul>
      {films.map(el => {
        return (
          <Link to={`/Movie/${el.id}`} key={el.id}>
            <li>{el.title}</li>
          </Link>
        );
      })}
    </ul>
  );
};