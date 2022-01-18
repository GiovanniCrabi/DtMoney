import { useEffect } from "react"
import { api } from "../../services/api";
import { Container } from "./styles"

export function TransactionsTable() {
  useEffect(() => {
    api.get('transactions')
    .then(response => console.log(response.data))
  }, []);

  return (
    <Container>
    <table>
        <thead>
          <th>Título</th>
          <th>Valor</th>
          <th>Categoria</th>
          <th>Data</th>
        </thead>

    <tbody>
      <tr>
        <td>Rent</td>
        <td className='withdraw'>-R$2.000</td>
        <td>Moradia</td>
        <td>25/05/2022</td>
      </tr>
    </tbody>

    <tbody>
      <tr>
        <td>Desenvolvimento de website</td>
        <td className='deposit'>R$12.000</td>
        <td>Desenvolvimento</td>
        <td>20/05/2022</td>
      </tr>
    </tbody>
    </table>

    </Container>
  )
}