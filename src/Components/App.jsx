import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { SearchForm } from './SearchForm';
import { PictureList } from './PictureList/PictureList';
import { Loader } from './Loader';

const App = () => {
  const [pictures, setPictures] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const render = newQuery => {
    setQuery(newQuery);
  };

  useEffect(() => {
    if (query === '') {
      return;
    }
    async function fetchPictures() {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://api.unsplash.com/search/photos?client_id=OO89Zfi4kDKEfWFRqQ8z4WPkYkmci1HP19luoFHQbCk&query=${query}&page=1`
        );
        setPictures(response.data.results);
        setLoading(false);
      } catch (error) {
        console.log('error');
      } finally {
        console.log('done');
      }
    }
    fetchPictures();
  }, [query]);

  return (
    <div>
      <SearchForm onSearch={render} />
      {loading && <Loader />}
      {pictures.length > 0 && <PictureList items={pictures} />}
    </div>
  );
};

export default App;
