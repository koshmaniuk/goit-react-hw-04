import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');

export const ImageModal = ({ isOpen, onClose, image }) => {
  return (
    <div>
      <Modal isOpen={isOpen} style={customStyles}>
        <img src={image} alt="" />
        <button onClick={() => onClose()}>close</button>
      </Modal>
    </div>
  );
};
