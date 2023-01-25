import NavBar from 'components/Navbar';
import JogoDTO from 'Objects/JogoDTO';
import './style.css';

const Jogo = (jogo: JogoDTO) => {
  return (
    <div className="jogo-container">
      <div className="jogo-container-header">
        {jogo.casa.equipe} x {jogo.fora.equipe}
      </div>
      <div
        className={jogo.palpite== jogo.resultado ? 'sinalizador' : 'sinalizador-red'}
      />
      {jogo.palpite != 0 && (
        <div className="itens-jogos-logo">
          <img src={jogo.palpite==1?jogo.casa.logo:jogo.fora.logo} />
        </div>
      )} 
      {jogo.palpite == 0 && <div className='empate'>
        X
      </div>}
    </div>
  );
};
export default Jogo;
