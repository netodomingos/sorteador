import { render, screen } from '@testing-library/react'
import { RecoilRoot } from 'recoil'

import ListaParticipantes from '../../components/ListaParticipantes/ListaParticipantes'
import { useListaDeParticipantes } from '../../state/hooks/useListaDeParticipantes'

// cria mock do hook de lista
jest.mock('../../state/hooks/useListaDeParticipantes', () => {
    return {
        useListaDeParticipantes: jest.fn()
    }
})

describe('O comportamento da Lista', () => { 

    //define retorno de lista como array vazio
    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue([])
    })

    test('Testando uma lista vazia de participantes', () => {
        render(
            <RecoilRoot>
                <ListaParticipantes />
            </RecoilRoot>
        )
        
        const itens = screen.queryAllByRole('listitem')
    
        expect(itens).toHaveLength(0)
    })
})

describe('', () => {
    //define retorno de lista como const participantes
    const participantes = [ 'Geraldo', 'Luana' ]         
    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes)
    })
    
    test('Testando uma lista preenchida de participantes', () => {
        render(
            <RecoilRoot>
                <ListaParticipantes />
            </RecoilRoot>
        )
        
        const itens = screen.queryAllByRole('listitem')

        expect(itens).toHaveLength(participantes.length)
    })
})