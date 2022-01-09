import { Container } from './styles'
import incomeImg from '../../assets/entries.svg'
import expensesImg from '../../assets/expenses.svg'
import totalImg from '../../assets/total.svg'
import { useContext } from 'react'
import { TransactionsContext } from '../../TransactionsContext'

export function Summary() {
  const transactions = useContext(TransactionsContext)

	return(
    <Container>
      <div>
        <header>
          <p>Incoming</p>
          <img src={incomeImg} alt="Incoming"/>
        </header>
        <strong>R$ 1000,00</strong>
      </div>
      <div>
        <header>
          <p>Expenses</p>
          <img src={expensesImg} alt="Expenses"/>
        </header>
        <strong>R$ 500,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total"/>
        </header>
        <strong>R$ 500,00</strong>
      </div>
    </Container>
	)
}