import { render, screen } from '@testing-library/react'
import { RecoilRoot } from 'recoil'
import Sorteio from '../../pages/Sorteio'

import { useListaDeParticipantes } from '../../state/hooks/useListaDeParticipantes'

jest.mock('../../state/hooks/useListaDeParticipantes', () => {
    return {
        useListaDeParticipantes: jest.fn()
    }
})


describe('Na página de sorteio', () => { 
    const participantes = [ 'Geraldo', 'Luana', 'Marcelo' ]    
    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes)
    })
    
    test('todos os participantes podem exibir o seu amigo secreto', () => {
        render(
            <RecoilRoot>
                <Sorteio />
            </RecoilRoot>
        )

        const opcoes = screen.queryAllByRole('option')

        expect(opcoes).toHaveLength(participantes.length)
    })
})