import { useRef } from 'react';
import css from './LoadrMoreBtn.module.css';
export const LoadMoreBtn = ({ page, setPage }) => {
  const div = useRef(null);
  const handleClick = () => {
    setPage(page + 1);
    div.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
  };
  return (
    <button onClick={handleClick} className={css.LoadMoreBtn} ref={div}>
      Load more
    </button>
  );
};
