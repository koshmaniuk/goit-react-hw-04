import { useRef, useEffect } from 'react';
import css from './LoadrMoreBtn.module.css';
const LoadMoreBtn = ({ page, setPage }) => {
  const div = useRef();
  const handleClick = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    div.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [page]);

  return (
    <button onClick={handleClick} className={css.LoadMoreBtn} ref={div}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
