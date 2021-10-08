import Modal from 'react-modal'
import { Container } from './styles'

Modal.setAppElement('#root');

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
	    overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <h2>Create New Transaction</h2>

        <input placeholder="Title" />
        <input placeholder="Amount" type="number" />
        <input placeholder="Category" />
        <button type="submit">
          Save
        </button>
      </Container>
    </Modal>
  );
}