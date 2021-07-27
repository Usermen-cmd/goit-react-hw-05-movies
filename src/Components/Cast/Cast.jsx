import { fetchServise } from 'utils/fetchServise';
import { useEffect, useState } from 'react';
//Utils
import toast from 'react-hot-toast';
import { setAdaptiveSettings } from 'utils/sliderSettings';
import PropTypes from 'prop-types';
//Components
import defaultImg from 'defaultImg/default-img.png';
import Slider from 'react-slick';
//Styles
import { setImage } from 'utils/setImage';
import css from './Cast.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Cast = ({ movieId }) => {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchServise({ movieId: `${movieId}/credits` })
      .then(d => {
        if (d.status === 200) {
          setCast(d.data.cast);
          return;
        }
        throw Error();
      })
      .catch(error => {
        toast.error(error.messsage);
        console.log(error);
      });
  }, [movieId]);

  return cast.length > 0 ? (
    <div className={css.list}>
      <h3 className={css.header}>Cast</h3>
      <Slider {...setAdaptiveSettings(cast.length)} width="600px">
        {cast.map(el => {
          return (
            <div key={el.id}>
              <p className={css.name}>{el.name}</p>
              <p className={css.name}>{el.character}</p>
              <img
                src={setImage(el.profile_path, defaultImg)}
                alt={el.name}
                className={css.characterImg}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  ) : (
    <p>Cast are missing</p>
  );
};

Cast.propTypes = {
  movieId: PropTypes.string.isRequired,
};
