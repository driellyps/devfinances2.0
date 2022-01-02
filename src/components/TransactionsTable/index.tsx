import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { Container } from './styles'

interface Transaction {
	id: number;
	title: string;
	amount: number;
	type: string;
	category: string;
	createdAt: string;
}

export function TransactionsTable() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('/transactions')
      .then((res: any) => setTransactions(res.data.transactions))

  }, [])

  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
        {transactions.map(t => (
				<tr key={t.id}>
		      <td>{t.title}</td>
		      <td className={t.type}>{t.amount}</td>
		      <td>{t.category}</td>
		      <td>{t.createdAt}</td>
	      </tr>
			))}
        </tbody>
      </table>
    </Container>
  )
}