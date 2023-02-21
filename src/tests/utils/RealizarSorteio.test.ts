import React from 'react'
import { realizarSorteio } from '../../utils/realizarSorteio'

describe('O sorteador de um amigo secreto', () => {
    test('Cada participante não sorteie o próprio nome', () => { 
        const participantes = [ 'Geraldo', 'Luana', 'Marcelo', 'Carlos', 'Lucas', 'Maria', 'Neto' ]   
        
        const sorteio = realizarSorteio(participantes)

        participantes.forEach(participante => {
            const amigoSecreto = sorteio.get(participante)
            expect(amigoSecreto).not.toEqual(participante)
        })
    })
})