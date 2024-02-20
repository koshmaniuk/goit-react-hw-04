import { useState } from 'react';
import css from './ImageCard.module.css';

const ImageCard = ({ imageUrls, imageAltDescr, author, likes }) => {
  return (
    <div>
      <img src={imageUrls.small} className={css.cardPicture} alt={imageAltDescr} />
    </div>
  );
};

export default ImageCard;
