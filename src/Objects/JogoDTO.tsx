import EquipeDTO from "./EquipeDTO";

type JogoDTO = {
  casa: EquipeDTO;
  fora: EquipeDTO;
  palpite: number;
  resultado: number
};

export default JogoDTO;
