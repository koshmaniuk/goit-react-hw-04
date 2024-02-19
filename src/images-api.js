import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com';

const fetchImagesByName = async (query, page) => {
  const response = await axios.get(
    `/search/photos?client_id=OO89Zfi4kDKEfWFRqQ8z4WPkYkmci1HP19luoFHQbCk&query=${query}&page=${page}&per_page=30`
  );
  return response.data.results;
};

export default fetchImagesByName;
