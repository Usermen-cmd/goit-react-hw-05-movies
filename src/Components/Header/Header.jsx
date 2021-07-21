import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <NavLink to="/" style={{ marginRight: '20px' }}>
        Home
      </NavLink>
      <NavLink to="/Movies">Movies</NavLink>
    </header>
  );
};
