import { useEffect, useState } from 'react';
//Utils
import { fetchServise } from 'utils/fetchServise';
import toast from 'react-hot-toast';
import { setDate } from 'utils/setDate';
import PropTypes from 'prop-types';
//Components
import ReactStars from 'react-rating-stars-component';
import defaultImg from 'defaultImg/default-img.png';
//Styles
import css from './Review.module.css';

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

  return reviews.length > 0 ? (
    <ul className={css.list}>
      {reviews.map(el => {
        const dateOfPost = setDate(el.created_at);
        const avatar = el.author_details.avatar_path
          ? `https://image.tmdb.org/t/p/w500${el.author_details.avatar_path}`
          : defaultImg;

        return (
          <li key={el.id} className={css.item}>
            <div className={css.commentWrapper}>
              <img
                className={css.avatar}
                src={avatar}
                alt={el.author}
                onError={e => (e.target.src = defaultImg)}
              />
              <p>Raiting</p>
              <ReactStars
                count={10}
                size={17}
                value={el.author_details.rating}
                edit={false}
                a11y={false}
              />
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
  ) : (
    <p>Reviews are missing</p>
  );
};

Review.propTypes = {
  movieId: PropTypes.string.isRequired,
};
