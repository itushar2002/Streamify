export const API_KEY = "AIzaSyCiIq8kyKegN4wp_2s7yT48mu2mWuimTL0";

 export const numconverter = (value) => {
  if (value >= 1000000) {
    return Math.floor(value / 1000000) + "M";
  } else if (value >= 1000) {
    return Math.floor(value / 1000) + "k";
  } else {
    return value;
  }
};
