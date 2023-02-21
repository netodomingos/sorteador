import { useSetRecoilState } from 'recoil'
import { realizarSorteio } from "../../utils/RealizarSorteio"
import { resultadoState } from "../atom"
import { useListaDeParticipantes } from "./useListaDeParticipantes"

export const useSorteador = () => {
    const participantes = useListaDeParticipantes()
    const setResultado = useSetRecoilState(resultadoState)
    
    return () => {
        const resultado = realizarSorteio(participantes)
        setResultado(resultado)
    }
}