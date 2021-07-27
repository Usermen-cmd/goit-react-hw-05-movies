export const setAdaptiveSettings = castQuatntity => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    arrows: true,
  };

  if (castQuatntity < 5) {
    return { ...settings, slidesToShow: castQuatntity };
  }
  return settings;
};

export default setAdaptiveSettings;
