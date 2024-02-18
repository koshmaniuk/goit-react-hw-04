import { useState } from 'react';
import ImageModal from '../ImageModal/ImageModal';
import css from './ImageCard.module.css';

const ImageCard = ({ imageUrls, imageDescr }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div>
      <img
        src={imageUrls.small}
        className={css.cardPicture}
        alt={imageDescr}
        onClick={() => setModalIsOpen(true)}
      />
      {modalIsOpen && (
        <ImageModal
          image={imageUrls.regular}
          descr={imageDescr}
          isOpen={modalIsOpen}
          onClose={() => setModalIsOpen(false)}
        />
      )}
    </div>
  );
};

export default ImageCard;
