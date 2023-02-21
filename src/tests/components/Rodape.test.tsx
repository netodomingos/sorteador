import { fireEvent, render, screen } from '@testing-library/react'
import { RecoilRoot } from 'recoil'
import Rodape from '../../components/Rodape/Rodape'

import { useListaDeParticipantes } from '../../state/hooks/useListaDeParticipantes'

jest.mock('../../state/hooks/useListaDeParticipantes', () => {
    return {
        useListaDeParticipantes: jest.fn()
    }
})

const mockNavegacao = jest.fn()
jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavegacao
    }
})

const mockSorteador = jest.fn()
jest.mock('../../state/hooks/useSorteador', () => {
    return {
        useSorteador: () => mockSorteador
    }
})


describe('O Comportamento do Rodapé quando não existem participantes suficientes', () => { 
    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue([])
    })

    test('O jogo não pode ser iniciado', () => {
        render(
            <RecoilRoot>
                <Rodape />
            </RecoilRoot>
        )

        const button = screen.getByRole('button')

        expect(button).toBeDisabled()
    })
})

describe('O Comportamento do Rodapé quando existem participantes suficientes', () => { 
    const participantes = [ 'Geraldo', 'Luana', 'Marcelo' ]         
    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes)
    })

    test('O jogo pode ser iniciado', () => {
        render(
            <RecoilRoot>
                <Rodape />
            </RecoilRoot>
        )

        const button = screen.getByRole('button')

        expect(button).not.toBeDisabled()
    })

    test('Navegar para página de sorteio', () => {
        render(
            <RecoilRoot>
                <Rodape />
            </RecoilRoot>
        )

        const button = screen.getByRole('button')

        fireEvent.click(button)

        expect(mockNavegacao).toHaveBeenCalledTimes(1)
        expect(mockNavegacao).toHaveBeenCalledWith('/sorteio')
        expect(mockSorteador).toBeCalledTimes(1)
    })
})