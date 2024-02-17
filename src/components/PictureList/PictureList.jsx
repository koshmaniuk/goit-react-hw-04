import { PictureCard } from '../PictureCard/PictureCard';
import css from './PictureList.module.css';
export const PictureList = ({ items }) => {
  console.log(items);
  return (
    <ul className={css.pictureListContainer}>
      {items.map(({ urls, id }) => (
        <PictureCard key={id} pictureUrl={urls} />
      ))}
    </ul>
  );
};
