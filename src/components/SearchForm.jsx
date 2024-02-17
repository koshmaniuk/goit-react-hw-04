export const SearchForm = ({ onSearch }) => {
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const topic = form.elements.topic.value;
    onSearch(topic);
    form.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="topic" placeholder="Search pictures..." />
      <button>Search</button>
    </form>
  );
};
