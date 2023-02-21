import { render, screen } from '@testing-library/react'
import { CardComponent } from '../../components/Card/style'

describe('Testando componente do Card.tsx', () => {
    test('O Card componente foi exibido com o conteudo', () => { 
        render(
          <CardComponent>
            <h1>test</h1>
            </CardComponent>
        )

        const Card = screen.getByText('test')
        expect(Card).toBeInTheDocument()
    })
})