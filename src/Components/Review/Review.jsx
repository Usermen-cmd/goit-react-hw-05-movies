import { fetchServise } from 'utils/fetchServise';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import css from './Review.module.css';
import { setDate } from 'utils/setDate';
import defaultImg from 'defaultImg/default-img.png';

export const Review = ({ movieId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    (() => {
      fetchServise({ movieId: `${movieId}/reviews` })
        .then(d => {
          if (d.status === 200) {
            setReviews(d.data.results);
            return;
          }
          throw Error();
        })
        .catch(error => {
          toast.error(error.messsage);
          console.log(error);
        });
    })();
  }, [movieId]);

  return (
    <ul className={css.list}>
      {reviews.map(el => {
        const dateOfPost = setDate(el.created_at);
        const avatar = el.author_details.avatar_path
          ? `https://image.tmdb.org/t/p/w500${el.author_details.avatar_path}`
          : defaultImg;

        return (
          <li key={el.id} className={css.item}>
            <div className={css.commentWrapper}>
              <img className={css.avatar} src={avatar} alt={el.author} />
              <p>Raiting {el.author_details.rating}</p>
            </div>
            <div>
              <h3 className={css.userName}>{el.author_details.username}</h3>
              <span className={css.dataCreate}>{dateOfPost}</span>
              <p className={css.content}>{el.content}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
