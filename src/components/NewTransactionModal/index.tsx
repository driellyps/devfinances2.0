import { useState } from 'react'
import Modal from 'react-modal'
import { Container, RadioBox, TransactionTypeContainer } from './styles'
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/entries.svg'
import expensesImg from '../../assets/expenses.svg'

Modal.setAppElement('#root');

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const [type, setType] = useState('deposit')


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
          <RadioBox 
            type="button" 
            onClick={() => setType('deposit')} 
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImg} alt="Income" />
            <span>Income</span>
          </RadioBox>

          <RadioBox 
            type="button" 
            onClick={() => setType('withdraw')} 
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={expensesImg} alt="Expense" />
            <span>Expense</span>
          </RadioBox>

        </TransactionTypeContainer>

        <input placeholder="Category" />
        <button type="submit">
          Save
        </button>
      </Container>
    </Modal>
  );
}