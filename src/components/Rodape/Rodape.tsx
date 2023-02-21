import { useListaDeParticipantes } from '../../state/hooks/useListaDeParticipantes'
import { useNavigate } from 'react-router-dom'
import { Botao, RodapeContainer } from './styles'
import { useSorteador } from '../../state/hooks/useSorteador'

export default function Rodape() {
    const participantes = useListaDeParticipantes()
    const navegar = useNavigate()
    const sortear = useSorteador()

    const iniciar = () => {
        sortear()
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
