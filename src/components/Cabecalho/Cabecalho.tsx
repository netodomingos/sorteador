import { Header, ImagemLogo, Participante } from './style'

import ParticipanteImage from '../../assets/images/participante.png'

export default function Cabecalho() {
  return (
    <Header>
        <ImagemLogo role="img" aria-label='Logo do Sorteador'></ImagemLogo>
        <Participante src={ParticipanteImage} alt="Participante com um presente na mão" />
    </Header>
  )
}
