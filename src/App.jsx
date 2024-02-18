import { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import fetchImagesByName from './images-api';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import NoResultError from './components/NoResultError/NoResultError';
import './App.css';

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [noRes, setNoRes] = useState(false);

  const render = newQuery => {
    setQuery(`${Date.now()}/${newQuery}`);
    setImages([]);
    setPage(1);
  };

  useEffect(() => {
    if (query === '') {
      return;
    }
    async function fetchImages() {
      try {
        setLoading(true);
        setError(false);
        setNoRes(false);
        const fetchedImages = await fetchImagesByName(query.split('/'[1]), page);
        setImages(prevImages => [...prevImages, ...fetchedImages]);
        if (fetchedImages.length === 0) {
          setNoRes(true);
        }
        setLoading(false);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchImages();
  }, [query, page]);

  return (
    <div className="mainContainer">
      <SearchBar onSearch={render} />
      {error && <ErrorMessage />}
      {noRes && <NoResultError />}
      {images.length > 0 && <ImageGallery items={images} />}
      {loading && <Loader />}
      {images.length > 0 && !loading && <LoadMoreBtn page={page} setPage={setPage} />}
      <Toaster />
    </div>
  );
};

export default App;
