import { fetchServise } from 'utils/fetchServise';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import defaultImg from 'defaultImg/default-img.png';
import css from './Cast.module.css';

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
  return (
    <ul className={css.list}>
      {cast.map(el => {
        const img = el.profile_path
          ? `https://image.tmdb.org/t/p/w500${el.profile_path}`
          : defaultImg;
        return (
          <li key={el.id} className={css.item}>
            <img className={css.characterImg} src={img} alt={el.name} />
            <p className={css.name}>{el.name}</p>
            <p>{el.character}</p>
          </li>
        );
      })}
    </ul>
  );
};