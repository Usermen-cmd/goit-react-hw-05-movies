import defaultImg from 'defaultImg/default-logo.png';

export const LogosCompanies = ({ logos }) => {
  return (
    <ul
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
      }}
    >
      {logos.map(logo => {
        const logoImg = logo.logo_path
          ? `https://image.tmdb.org/t/p/w300${logo.logo_path}`
          : defaultImg;
        return (
          <li key={logo.id}>
            <img style={{ width: '100px' }} src={logoImg} alt={logo.name} />
          </li>
        );
      })}
    </ul>
  );
};
