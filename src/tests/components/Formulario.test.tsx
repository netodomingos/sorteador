import { act, fireEvent, render, screen } from '@testing-library/react'
import { RecoilRoot } from 'recoil'

import Formulario from '../../components/Formulario/Formulario'

describe('O Comportamento do Formulario.tsx', () => {
    test('Quando o input estiver vazio, novos participantes não podem ser adicionados', () => {
        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>
        )
    
        const input  = screen.getByPlaceholderText('Insira os nomes dos participantes')
        const button  = screen.getByRole('button')
    
        expect(input).toBeInTheDocument()
        expect(button).toBeDisabled()
    })
    
    test('Adcionar um participante caso exista um nome preenchido', () => { 
        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>
        )
    
        const input  = screen.getByPlaceholderText('Insira os nomes dos participantes')
        const button  = screen.getByRole('button')
    
        // adiciona valor no input
        fireEvent.change(input, {
            target: {
                value: 'Luana Andrade'
            }
        })
    
        // clique no botao
        fireEvent.click(button)
    
        expect(input).toHaveFocus()
    
        expect(input).toHaveValue('')
    })
    
    test('Nomes duplicados não podem ser adicionados na lista', () => { 
        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>
        )
    
        const input  = screen.getByPlaceholderText('Insira os nomes dos participantes')
        const button  = screen.getByRole('button')
    
        fireEvent.change(input, {
            target: {
                value: 'Luana Andrade'
            }
        })
    
        fireEvent.click(button)
    
        fireEvent.change(input, {
            target: {
                value: 'Luana Andrade'
            }
        })
    
        fireEvent.click(button)
    
        const mensagemDeErro = screen.getByRole('alert')
    
        expect(mensagemDeErro.textContent).toBe('Nomes duplicados não são permitidos!')
    })
    
    test('A mensagem de erro deve sumir após os timers ', () => { 
        jest.useFakeTimers()
        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>
        )
    
        const input  = screen.getByPlaceholderText('Insira os nomes dos participantes')
        const button  = screen.getByRole('button')
    
        fireEvent.change(input, {
            target: {
                value: 'Luana Andrade'
            }
        })
    
        fireEvent.click(button)
    
        fireEvent.change(input, {
            target: {
                value: 'Luana Andrade'
            }
        })
    
        fireEvent.click(button)
    
        let mensagemDeErro = screen.queryByRole('alert')
        expect(mensagemDeErro).toBeInTheDocument()
    
        act(() => {
            jest.runAllTimers()
        });
    
        mensagemDeErro = screen.queryByRole('alert')
        expect(mensagemDeErro).toBeNull()
    })
})