export const LoadMoreBtn = ({ page, setPage }) => {
  const handleClick = () => {
    setPage(page + 1);
  };
  return <button onClick={handleClick}>Load more</button>;
};
