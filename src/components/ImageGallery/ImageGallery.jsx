import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';
const ImageGallery = ({ items }) => {
  return (
    <ul className={css.pictureListContainer}>
      {items.map(({ urls, id, description }) => (
        <li key={id}>
          <ImageCard imageUrls={urls} imageDescr={description} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
