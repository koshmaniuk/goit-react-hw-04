import css from './LoadrMoreBtn.module.css';
const LoadMoreBtn = ({ onClick }) => {
  return (
    <button onClick={onClick} className={css.LoadMoreBtn}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
