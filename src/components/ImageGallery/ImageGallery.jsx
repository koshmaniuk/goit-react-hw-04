import { PictureCard } from '../PictureCard/PictureCard';
import css from './ImageGallery.module.css';
export const ImageGallery = ({ items }) => {
  console.log(items);
  return (
    <ul className={css.pictureListContainer}>
      {items.map(({ urls, id }) => (
        <PictureCard key={id} pictureUrl={urls} />
      ))}
    </ul>
  );
};
