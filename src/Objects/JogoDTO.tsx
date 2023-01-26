import CampeonatoDTO from "./CampeonatoDTO";
import EquipeDTO from "./EquipeDTO";
import RodadaDTO from "./RodadaDTO";

type JogoDTO = {
  id: number;
  timeCasa: EquipeDTO;
  timeFora: EquipeDTO;
  campeonato: CampeonatoDTO;
  rodada: RodadaDTO;
  data: string;
  palpite: number;
  resultado: number;
  link: string;
  placar: string;
  ordem: number;
};

export default JogoDTO;
