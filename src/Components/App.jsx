import { useState, useEffect } from 'react';
import './App.css';
import { SearchBar } from './SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader';
import { Error } from './Error';
import { NoResults } from './NoResults';
import { fetchPicturesByName } from '../articles-api';
import { Toaster } from 'react-hot-toast';

const App = () => {
  const [pictures, setPictures] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [noRes, setNoRes] = useState(false);
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
        setNoRes(false);
        const fetchedPictures = await fetchPicturesByName(query.split('/'[1]), page);
        setPictures(prevPictures => [...prevPictures, ...fetchedPictures]);
        if (fetchedPictures.length === 0) {
          setNoRes(true);
        }
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
      <SearchBar onSearch={render} />
      {error && <Error />}
      {noRes && <NoResults />}
      {pictures.length > 0 && <ImageGallery items={pictures} />}
      {loading && <Loader />}
      {pictures.length > 0 && !loading && <button onClick={onLoadMore}>Load more</button>}
      <Toaster />
    </div>
  );
};

export default App;
