import { atom } from 'recoil'

export const listaParticipantesState = atom<string[]>({
    key: 'ListaParticipantesState',
    default: []
}) 

export const erroState = atom<string>({
    key: 'erroState',
    default: ''
})

export const resultadoState = atom<Map<string, string>>({
    key: 'resultadoState',
    default: new Map()
})