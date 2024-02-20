import css from './ImageCard.module.css';

const ImageCard = ({ imageSrc, imageAlt }) => {
  return (
    <div>
      <img src={imageSrc} alt={imageAlt} className={css.cardPicture} />
    </div>
  );
};

export default ImageCard;
