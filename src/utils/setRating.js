export const setRating = vote => {
  return Math.floor((vote / 10) * 100) + '%';
};
