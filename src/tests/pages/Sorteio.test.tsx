import { fireEvent, render, screen } from '@testing-library/react'
import { RecoilRoot } from 'recoil'
import Sorteio from '../../pages/Sorteio'

import { useListaDeParticipantes } from '../../state/hooks/useListaDeParticipantes'
import { useResultadoSorteio } from '../../state/hooks/useResultadoSorteio'

jest.mock('../../state/hooks/useListaDeParticipantes', () => {
    return {
        useListaDeParticipantes: jest.fn()
    }
})

jest.mock('../../state/hooks/useResultadoSorteio', () => {
    return {
        useResultadoSorteio: jest.fn()
    }
})

describe('Na página de sorteio', () => { 
    const participantes = [ 'Geraldo', 'Luana', 'Marcelo' ]  
    const resultado = new Map([
        ['Geraldo', 'Luana'],
        ['Luana', 'Marcelo'],
        ['Marcelo', 'Geraldo']
    ])  
    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes),
        (useResultadoSorteio as jest.Mock).mockReturnValue(resultado)
    })
    
    test('Todos os participantes podem exibir o seu amigo secreto', () => {
        render(
            <RecoilRoot>
                <Sorteio />
            </RecoilRoot>
        )

        const opcoes = screen.queryAllByRole('option')

        expect(opcoes).toHaveLength(participantes.length)
    })

    test('O amigo secreto é exibido quando solicitado', () => {
        render(
            <RecoilRoot>
                <Sorteio />
            </RecoilRoot>
        )

        const select = screen.getByPlaceholderText('Selecione o seu nome')

        fireEvent.change(select, {
            target: {
                value: participantes[0]
            }
        })

        const botao = screen.getByRole('button')

        fireEvent.click(botao)

        const amigoSecreto = screen.getByRole('alert')

        expect(amigoSecreto).toBeInTheDocument()
    })
})