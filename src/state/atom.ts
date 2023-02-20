import { atom } from 'recoil'

export const ListaParticipantesState = atom<string[]>({
    key: 'ListaParticipantesState',
    default: []
}) 