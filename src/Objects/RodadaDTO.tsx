import JogoDTO from "./JogoDTO";

type RodadaDTO = {
  id: number;
  dtaAbertura: string;
  dtaFechamento: string;
  premiacao: number;
  status: number;
  jogos: JogoDTO[];
};

export default RodadaDTO;
