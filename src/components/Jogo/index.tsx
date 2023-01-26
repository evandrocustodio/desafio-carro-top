import JogoDTO from 'Objects/JogoDTO';
import './style.css';

type Props = {
  partida: JogoDTO;
  palpite: number;
};

const Jogo = ({ partida, palpite }: Props) => {
  const acertouJogo = palpite === partida.resultado;
  return (
    <div className="jogo-container">
      <div className="jogo-container-header">
        {partida.timeCasa.sigla} x {partida.timeFora.sigla}
      </div>
      <div className="jogo-container-foot">
        {partida.placar ? partida.placar : '-'}
      </div>
      <div className={acertouJogo ? 'sinalizador' : 'sinalizador-red'} />
      {palpite !== 0 && (
        <div className="itens-jogos-logo">
          <a href={partida.link} target="_blank" rel="noreferrer">
            <img
              src={
                palpite === 1 ? partida.timeCasa.logo : partida.timeFora.logo
              }
              alt=""
            />
          </a>
        </div>
      )}
      {palpite === 0 && <div className="empate">X</div>}
    </div>
  );
};
export default Jogo;
