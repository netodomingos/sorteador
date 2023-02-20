import { useListaDeParticipantes } from "../state/hooks/useListaDeParticipantes"

export default function Sorteio() {
  const participantes = useListaDeParticipantes()

  return (
   <section>
        <form>
            <select name="participantes" id="participantes">
                {participantes.map(participante => <option value={participante} key={participante}>{participante}</option>)}
            </select>
        </form>
   </section>
  )
}
