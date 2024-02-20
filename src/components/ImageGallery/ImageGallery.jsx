import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

const ImageGallery = ({ items, onOpen }) => {
  return (
    <ul className={css.pictureListContainer}>
      {items.map(({ urls, id, alt_description, user, likes }) => (
        <li
          key={id}
          onClick={() => onOpen({ src: urls, likes: likes, author: user, alt: alt_description })}
        >
          <ImageCard imageUrls={urls} imageAltDescr={alt_description} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
