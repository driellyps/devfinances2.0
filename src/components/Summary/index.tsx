import { Container } from './styles'
import incomeImg from '../../assets/entries.svg'
import expensesImg from '../../assets/expenses.svg'
import totalImg from '../../assets/total.svg'
import { useContext } from 'react'
import { TransactionsContext } from '../../TransactionsContext'

export function Summary() {
  const {transactions} = useContext(TransactionsContext)

  const summary = transactions.reduce((acc, transaction) => {
    if(transaction.type === "income") {
      acc.incomes += transaction.amount
      acc.total += transaction.amount
    } else {
      acc.withdraws += transaction.amount
      acc.total -= transaction.amount
    }

    return acc
  }, {
    incomes: 0,
    withdraws: 0,
    total: 0
  })

  

	return(
    <Container>
      <div>
        <header>
          <p>Incoming</p>
          <img src={incomeImg} alt="Incoming"/>
        </header>
        <strong>
          {new Intl.NumberFormat('en-SV', {
              style: 'currency',
              currency: 'SEK'
            }).format(summary.incomes)}
        </strong>
      </div>
      <div>
        <header>
          <p>Expenses</p>
          <img src={expensesImg} alt="Expenses"/>
        </header>
        <strong>-
          {new Intl.NumberFormat('en-SV', {
              style: 'currency',
              currency: 'SEK'
            }).format(summary.withdraws)}
        </strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total"/>
        </header>
        <strong>
          {new Intl.NumberFormat('en-SV', {
              style: 'currency',
              currency: 'SEK'
            }).format(summary.total)}
        </strong>
      </div>
    </Container>
	)
}