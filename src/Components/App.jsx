import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { SearchForm } from './SearchForm';
import { PictureList } from './PictureList/PictureList';
import { Loader } from './Loader';
import { Error } from './Error';
import { NoResults } from './NoResults';
import { fetchPicturesByName } from '../articles-api';

const App = () => {
  const [pictures, setPictures] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const render = newQuery => {
    setQuery(`${Date.now()}/${newQuery}`);
    setPictures([]);
    setPage(1);
  };

  useEffect(() => {
    if (query === '') {
      return;
    }
    async function fetchPictures() {
      try {
        setLoading(true);
        setError(false);
        // const response = await axios.get(
        //   `https://api.unsplash.com/search/photos?client_id=OO89Zfi4kDKEfWFRqQ8z4WPkYkmci1HP19luoFHQbCk&query=${query.split(
        //     '/'[1]
        //   )}&page=${page}&per_page=12`
        // );
        const fetchedPictures = await fetchPicturesByName(query.split('/'[1]), page);
        setPictures(prevPictures => [...prevPictures, ...fetchedPictures]);
        setLoading(false);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchPictures();
  }, [query, page]);

  const onLoadMore = () => {
    setPage(page + 1);
  };
  return (
    <div>
      <SearchForm onSearch={render} />
      {error && <Error />}
      {pictures.length > 0 && <PictureList items={pictures} />}
      {loading && <Loader />}
      {pictures.length > 0 && !loading && <button onClick={onLoadMore}>Load more</button>}
    </div>
  );
};

export default App;
