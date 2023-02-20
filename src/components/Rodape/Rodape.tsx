import { useListaDeParticipantes } from '../../state/hooks/useListaDeParticipantes'
import { useNavigate } from 'react-router-dom'
import { Botao, RodapeContainer } from './styles'

export default function Rodape() {
    const participantes = useListaDeParticipantes()
    const navegar = useNavigate()

    const iniciar = () => {
        navegar('/sorteio')
    }

    return (
        <RodapeContainer>
            <Botao 
                disabled={participantes.length < 3}
                onClick={iniciar}
            >
                Inicar Brincadeira
            </Botao>
            <img src="/imagens/sacolas.png" alt="Sacolas de compras" />
        </RodapeContainer>
    )
}
