import { useSetRecoilState } from 'recoil'
import { ListaParticipantesState } from '../atom'

export const useAdicionarParticipante = () => {
    const setLista = useSetRecoilState(ListaParticipantesState)

    return (nomeDoParticipante: string) => {
        return setLista(listaAtual => [...listaAtual, nomeDoParticipante])
    }
}