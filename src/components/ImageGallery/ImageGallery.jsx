import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

const ImageGallery = ({ items, onOpen }) => {
  return (
    <ul className={css.pictureListContainer}>
      {items.map(({ urls: { small, regular }, id, alt_description, user: { name }, likes }) => (
        <li
          key={id}
          onClick={() => onOpen({ src: regular, likes: likes, author: name, alt: alt_description })}
        >
          <ImageCard imageSrc={small} imageAlt={alt_description} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
