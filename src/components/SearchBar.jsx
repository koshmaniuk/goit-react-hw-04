import toast from 'react-hot-toast';
export const SearchBar = ({ onSearch }) => {
  const handleSubmit = event => {
    const form = event.target;
    const topic = form.elements.topic.value;
    if (topic.trim() === '') {
      event.preventDefault();
      return toast.error('The input field is empty');
    }
    event.preventDefault();
    onSearch(topic);
    form.reset();
  };
  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          name="topic"
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};
