import Modal from 'react-modal';
import css from './ImageModal.module.css';

const customStyles = {
  content: {
    height: '1100px',
    border: 'none',
    padding: '0',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '0',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
};

Modal.setAppElement('#root');

const ImageModal = ({ isOpen, imageSrc, imageAlt, author, likes, onClose }) => {
  return (
    <div className={css.modalContainer}>
      <Modal
        isOpen={isOpen}
        style={customStyles}
        shouldCloseOnOverlayClick={true}
        onRequestClose={() => onClose()}
      >
        <img src={imageSrc} alt={imageAlt} className={css.image} />
        <div className={css.infoContainer}>
          <p>
            Author: <span className={css.info}>{author}</span>
          </p>
          <p>
            Likes: <span className={css.info}>{likes}</span>
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default ImageModal;
