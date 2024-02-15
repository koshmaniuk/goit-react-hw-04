import { useState } from 'react';
import './App.css';
import axios from 'axios';
import { ArticleList } from './ArticleList.jsx';
import { fetchArticlesWithTopic } from '../articles-api.js';
import { SearchForm } from './SearchForm.jsx';
import { Loader } from './Loader.jsx';
import { Error } from './Error.jsx';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async topic => {
    try {
      setArticles([]);
      setError(false);
      setLoading(true);
      const data = await fetchArticlesWithTopic(topic);
      setArticles(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SearchForm onSearch={handleSearch} />
      {loading && <Loader />}
      {error && <Error />}
      {articles.length > 0 && <ArticleList items={articles} />}
    </div>
  );
};

// const App = () => {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);

//   useEffect(() => {
//     async function fetchArticles() {
//       try {
//         setLoading(true);
//         const data = await fetchArticlesWithTopic('react');
//         setArticles(data);
//       } catch (error) {
//         setError(true);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchArticles();
//   }, []);

//   return (
//     <div>
//       {loading && <p>Loading data, please wait...</p>}
//       {error && <p>Whoops, something went wrong! Please try reloading this page!</p>}
//       {articles.length > 0 && <ArticleList items={articles} />}
//     </div>
//   );
// };

export default App;
