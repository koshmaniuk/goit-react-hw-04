import { ImageCard } from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';
export const ImageGallery = ({ items }) => {
  return (
    <ul className={css.pictureListContainer}>
      {items.map(({ urls, id }) => (
        <li key={id}>
          <ImageCard pictureUrl={urls} />
        </li>
      ))}
    </ul>
  );
};
