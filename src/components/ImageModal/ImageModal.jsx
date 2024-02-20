import Modal from 'react-modal';
import css from './ImageModal.module.css';

const customStyles = {
  content: {
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

const ImageModal = ({ isOpen, image, imageAltDescr, author, likes, onClose }) => {
  return (
    <div className={css.modalContainer}>
      <Modal isOpen={isOpen} style={customStyles} onRequestClose={() => onClose()}>
        <img src={image} alt={imageAltDescr} className={css.image} />
        <div className={css.infoContainer}>
          <p>
            Author: <span className={css.info}>{author.name}</span>
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
