import { render, screen, } from '@testing-library/react'

import Cabecalho from '../../components/Cabecalho/Cabecalho'

describe('Testando o componente de Cabecalho.tsx', () => {
    test('Verificando se existe uma imagem label no componente', () => {
        render( <Cabecalho />)
    
        const imagemLogoLabel = screen.getByLabelText('Logo do Sorteador')

        expect(imagemLogoLabel).toBeInTheDocument()
    })

    test('Verificando se existe uma imagem no componente', () => {
        render( <Cabecalho />)
    
        const imagem = screen.getByAltText('Participante com um presente na mão')

        expect(imagem).toBeInTheDocument()
    })

    test('Verificando se uma imagem renderiza no componente', () => {
        render( <Cabecalho />)
    
        const displayImage = document.querySelector("img") as HTMLImageElement

        expect(displayImage.src).toContain('participante.png')
    })
})