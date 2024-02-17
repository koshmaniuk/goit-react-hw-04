import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com';

export const fetchPicturesByName = async (query, page) => {
  const response = await axios.get(
    `https://api.unsplash.com/search/photos?client_id=OO89Zfi4kDKEfWFRqQ8z4WPkYkmci1HP19luoFHQbCk&query=${query}&page=${page}&per_page=12`
  );
  return response.data.results;
};
