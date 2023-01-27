import JogoDTO from './JogoDTO';

type RodadaDTO = {
  id: number;
  dtaAbertura: string;
  dtaFechamento: string;
  premio: number;
  acumulado: number;
  valor: number;
  percAcumulado: number;
  txServico: number;
  percPremio: number;
  apostas: number;
  status: number;
  jogos: JogoDTO[];
};

export default RodadaDTO;
