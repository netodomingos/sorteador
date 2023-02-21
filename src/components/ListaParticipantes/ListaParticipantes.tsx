import { useListaDeParticipantes } from "../../state/hooks/useListaDeParticipantes"

export default function ListaParticipantes() {
  const participantes: Array<string> = useListaDeParticipantes()

  return (
    <ul>
        {participantes.map(participante => <li key={participante}>{participante}</li>)}
    </ul>
  )
}
