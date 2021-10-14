import { FormEvent, useState } from 'react'
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
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0)
  const [type, setType] = useState('deposit')
  const [category, setCategory] = useState('')

  function handleNewTransaction(e: FormEvent) {
    e.preventDefault()
  }

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

      <Container onSubmit={handleNewTransaction}>
        <h2>Create New Transaction</h2>

        <input 
          placeholder="Title" 
          value={title} 
          onChange={e => setTitle(e.target.value)}
        />
        <input 
          placeholder="Amount" 
          type="number"
          value={amount} 
          onChange={e => setAmount(Number(e.target.value))}
        />

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

        <input 
          placeholder="Category"
          value={category} 
          onChange={e => setCategory(e.target.value)}
        />
        <button type="submit">
          Save
        </button>
      </Container>
    </Modal>
  );
}