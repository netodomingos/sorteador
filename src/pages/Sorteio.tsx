import { useState } from "react"
import Card from "../components/Card/Card"
import { useListaDeParticipantes } from "../state/hooks/useListaDeParticipantes"
import { useResultadoSorteio } from "../state/hooks/useResultadoSorteio"

import './sorteio.css'

export default function Sorteio() {
  const [participante, setParticipante] = useState('')
  const [amigoSecreto, setAmigoSecreto] = useState('')

  const participantes = useListaDeParticipantes()
  const resultado = useResultadoSorteio()

  const sortear = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault()
    if (resultado.has(participante)) {
      setAmigoSecreto(resultado.get(participante)!)

      setTimeout(() => {
        setAmigoSecreto('')
      }, 5000)
    }
  }

  return (
    <Card>
      <section className="sorteio">
        <form onSubmit={sortear}>
            <select 
              required 
              name="participantes" 
              id="participantes" 
              placeholder="Selecione o seu nome"
              value={participante}
              onChange={evento => setParticipante(evento.target.value)}
            >
              <option value="">selecione seu nome</option>
              {participantes.map(participante => <option value={participante} key={participante}>{participante}</option>)}
            </select>
            <p>Clique em em sortear para ver quem é seu amigo secreto!</p>
            <button className="botao-sortear">Sortear</button>
        </form>
        {amigoSecreto && <p className="resultado" role='alert'>{amigoSecreto}</p>}
        <footer className="sorteio">
            <img src="/imagens/aviao.png" className="aviao" alt="Um desenho de um avião de papel" />
        </footer>
      </section>
    </Card>
  )
}
