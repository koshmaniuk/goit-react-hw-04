import { useState } from 'react';
import ImageModal from '../ImageModal/ImageModal';
import css from './ImageCard.module.css';

const ImageCard = ({ imageUrls, imageAltDescr, author, likes }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div>
      <img
        src={imageUrls.small}
        className={css.cardPicture}
        alt={imageAltDescr}
        onClick={() => setModalIsOpen(true)}
      />
      {modalIsOpen && (
        <ImageModal
          image={imageUrls.regular}
          imageAltDescr={imageAltDescr}
          author={author}
          isOpen={modalIsOpen}
          likes={likes}
          onClose={() => setModalIsOpen(false)}
        />
      )}
    </div>
  );
};

export default ImageCard;
