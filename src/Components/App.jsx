import { useState, useEffect } from 'react';
import './App.css';
import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Error } from './Error/Error';
import { NoResultError } from './NoResultError/NoResultError';
import { fetchPicturesByName } from '../articles-api';
import { Toaster } from 'react-hot-toast';
import { LoadMoreBtn } from './LoadMoreBtn/LoadMoreBtn';

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

  return (
    <div className="mainContainer">
      <SearchBar onSearch={render} />
      {error && <Error />}
      {noRes && <NoResultError />}
      {pictures.length > 0 && <ImageGallery items={pictures} />}
      {loading && <Loader />}
      {pictures.length > 0 && !loading && <LoadMoreBtn page={page} setPage={setPage} />}
      <Toaster />
    </div>
  );
};

export default App;
