import { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import fetchImagesByName from '../images-api';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import Loader from './Loader/Loader';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import NoResultError from './NoResultError/NoResultError';
import './App.css';

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [noResult, setNoResult] = useState(false);

  const imageRequest = newQuery => {
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
        setNoResult(false);
        const fetchedImages = await fetchImagesByName(query.split('/'[1]), page);
        setImages(prevImages => [...prevImages, ...fetchedImages]);
        if (fetchedImages.length === 0) {
          setNoResult(true);
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
      <SearchBar onSubmit={imageRequest} />
      {error && <ErrorMessage />}
      {noResult && <NoResultError />}
      {images.length > 0 && <ImageGallery items={images} />}
      {loading && <Loader />}
      {images.length > 0 && !loading && <LoadMoreBtn page={page} setPage={setPage} />}
      <Toaster />
    </div>
  );
};

export default App;
