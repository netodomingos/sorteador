import React from 'react'
import { useListaDeParticipantes } from '../../state/hooks/useListaDeParticipantes'
import { useNavigate } from 'react-router-dom'

export default function Rodape() {
    const participantes = useListaDeParticipantes()
    const navegar = useNavigate()

    const iniciar = () => {
        navegar('/sorteio')
    }

    return (
        <footer>
            <button 
                disabled={participantes.length < 3}
                onClick={iniciar}
            >
                Inicar Brincadeira
            </button>
        </footer>
    )
}
