import toast from 'react-hot-toast';
import css from './SearchBar.module.css';
import { MdImageSearch } from 'react-icons/md';

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = event => {
    const form = event.target;
    const topic = form.elements.topic.value;
    if (topic.trim() === '') {
      event.preventDefault();
      return toast.error('The input field is empty');
    }
    event.preventDefault();
    onSubmit(topic);
    form.reset();
  };

  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit} className={css.searchForm}>
        <button type="submit" className={css.searchBtn}>
          <MdImageSearch size="25px" />
        </button>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          name="topic"
          placeholder="Search images and photos"
          className={css.inputField}
        />
      </form>
    </header>
  );
};

export default SearchBar;
