import { Container } from './styles'

export function TransactionsTable() {
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
          <tr>
            <td>Salary</td>
            <td className="income">R$ 5.000,00</td>
            <td>Work</td>
            <td>01/10/2021</td>
          </tr>
          <tr>
            <td>Groceries</td>
            <td className="withdraw">- R$ 1.000,00</td>
            <td>Food</td>
            <td>05/10/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}