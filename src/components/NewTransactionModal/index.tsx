import Modal from 'react-modal'
import { Container, TransactionTypeContainer } from './styles'
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/entries.svg'
import expensesImg from '../../assets/expenses.svg'

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

      <button type="button" onClick={onRequestClose} className="react-modal-close">
        <img src={closeImg} alt="Close modal" />
      </button>

      <Container>
        <h2>Create New Transaction</h2>

        <input placeholder="Title" />
        <input placeholder="Amount" type="number" />

        <TransactionTypeContainer>
          <button type="button">
            <img src={incomeImg} alt="Income" />
            <span>Income</span>
          </button>

          <button type="button">
            <img src={expensesImg} alt="Expense" />
            <span>Expense</span>
          </button>

        </TransactionTypeContainer>

        <input placeholder="Category" />
        <button type="submit">
          Save
        </button>
      </Container>
    </Modal>
  );
}