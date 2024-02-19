import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';
const ImageGallery = ({ items }) => {
  return (
    <ul className={css.pictureListContainer}>
      {items.map(({ urls, id, alt_description, user, likes }) => (
        <li key={id}>
          <ImageCard imageUrls={urls} imageAltDescr={alt_description} author={user} likes={likes} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
