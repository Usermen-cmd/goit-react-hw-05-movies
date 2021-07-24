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
          <li
            key={logo.id}
            style={{
              minHeight: '180px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <img style={{ width: '100px' }} src={logoImg} alt={logo.name} />
            <p>{logo.name}</p>
          </li>
        );
      })}
    </ul>
  );
};
