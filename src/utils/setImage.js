export const setImage = (image, defaltImage) => {
  return image ? `https://image.tmdb.org/t/p/w300${image}` : defaltImage;
};
