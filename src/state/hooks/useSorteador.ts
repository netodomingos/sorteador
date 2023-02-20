import shuffle from "just-shuffle"
import { useSetRecoilState } from 'recoil'
import { resultadoState } from "../atom"
import { useListaDeParticipantes } from "./useListaDeParticipantes"

export const useSorteador = () => {
    const participantes = useListaDeParticipantes()
    const setResultado = useSetRecoilState(resultadoState)

    return () => {
        const totalParticipantes = participantes.length
        const embaralhado = shuffle(participantes)
        const resultado = new Map<string, string>()

        for (let index = 0; index < totalParticipantes; index++) {
            const indiceAmigo = index === (totalParticipantes - 1) ? 0 : index
            resultado.set(embaralhado[index], embaralhado[indiceAmigo])
        }

        setResultado(resultado)
    }
}