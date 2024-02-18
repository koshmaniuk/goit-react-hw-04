import { useState } from 'react';
import { ImageModal } from '../ImageModal/ImageModal';
import css from './ImageCard.module.css';

export const ImageCard = ({ pictureUrl }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  console.log(modalIsOpen);
  return (
    <div>
      <img
        src={pictureUrl.small}
        className={css.cardPicture}
        alt=""
        onClick={() => setModalIsOpen(true)}
      />
      {modalIsOpen && (
        <ImageModal
          image={pictureUrl.regular}
          isOpen={modalIsOpen}
          onClose={() => setModalIsOpen(false)}
        />
      )}
    </div>
  );
};
