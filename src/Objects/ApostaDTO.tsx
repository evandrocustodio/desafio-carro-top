import ApostadorDTO from './ApostadorDTO';
import RodadaDTO from './RodadaDTO';

type ApostaDTO = {
  id: number;
  rodada: RodadaDTO;
  palpites: string;
  hash: string;
  pontos: number;
  data: string;
  apostador: ApostadorDTO;
};

export default ApostaDTO;
