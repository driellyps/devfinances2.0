import { useTransactions } from '../../hooks/useTransactions'
import { Container } from './styles'

export function TransactionsTable() {
  const {transactions} = useTransactions();

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
          <td className={t.type}>
            {new Intl.NumberFormat('en-SV', {
              style: 'currency',
              currency: 'SEK'
            }).format(t.amount)}
          </td>
		      <td>{t.category}</td>
		      <td>{new Intl.DateTimeFormat('sv-SV').format(new Date(t.createdAt))}</td>
	      </tr>
			))}
        </tbody>
      </table>
    </Container>
  )
}