import { fetchServise } from 'utils/fetchServise';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import css from './Review.module.css';

export const Review = ({ movieId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
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
  }, [movieId]);
  return (
    <ul>
      {reviews.map(el => {
        return (
          <li key={el.id}>
            <div className={css.commentWrapper}>
              <img
                className={css.avatar}
                src={`https://image.tmdb.org/t/p/w500${el.author_details.avatar_path}`}
                alt={el.author}
              />
              <p className={css.content}>{el.content}</p>
            </div>
            <div>
              <p>{el.author_details.username}</p>
              <p>Raiting{el.author_details.rating}</p>
            </div>

            <p>{el.created_at}</p>
          </li>
        );
      })}
    </ul>
  );
};
