import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { useAdicionarParticipante } from '../../state/hooks/useAdcionarParticipante'
import { useMensagemDeErro } from '../../state/hooks/useMensagemDeErro'

export default function Formulario() {
  const [nome, setNome] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const adicionarNaLista = useAdicionarParticipante()
  const mensagemDeErro = useMensagemDeErro()

  const adicionarParticipante = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault()
    adicionarNaLista(nome)

    setNome('')
    inputRef.current?.focus()

  }

  return (
    <form onSubmit={adicionarParticipante}>
        <input 
          type="text" 
          placeholder='Insira os nomes dos participantes'
          value={nome}
          onChange={evento => setNome(evento.target.value)}
          ref={inputRef}
        />

        <button disabled={!nome}>
          Adicionar
        </button>
        
        {mensagemDeErro && <p role='alert'>{mensagemDeErro}</p>}
    </form>
  )
}
