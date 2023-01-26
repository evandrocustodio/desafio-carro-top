import Jogo from 'components/Jogo';
import JogoDTO from 'Objects/JogoDTO';
import './style.css';
import ApostaDTO from 'Objects/ApostaDTO';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash} from '@fortawesome/free-solid-svg-icons'
import { faEdit} from '@fortawesome/free-solid-svg-icons'
import api from 'api';

type Props = {
  aposta: ApostaDTO;
  jogos?: JogoDTO[];
  reload?: any;
};

const Cartela = ({ aposta, jogos,reload }: Props) => {

  const deletarAposta = async (aposta:ApostaDTO) => {
    const r = await api.delete(`apostas/${aposta.id}`);
    reload(false);

  }

  /*
  const calculaPontos = () => {
    let pontuacao = 0;
    jogos?.map((jg,x) => {
        if (parseInt(aposta.palpites[x]) === jg.resultado) {
           pontuacao++;
        }
    })
    return pontuacao;
  }
*/
  return (
    <div className="itens">
      <div className="itens-left">
        <div className="itens-id">
          {aposta.hash.substring(0, 7).toUpperCase()}
        </div>
        <div className="itens-date">22/05/2022 17:15</div>
      </div>
      <div className="itens-right">
        {jogos?.map((j, x) => (
          <Jogo key={j.id} partida={j} palpite={parseInt(aposta.palpites[x])} />
        ))}
      </div>
      <div className="itens-right">
        <div className="itens-right-total">
          <div className="itens-right-total-titulo">PONTOS</div>
          <div className="itens-right-total-pontos">{aposta.pontos}</div>
          <FontAwesomeIcon icon={faEdit} className="icon-edit" title='Alterar Palpite' />
          <FontAwesomeIcon icon={faTrash} className="icon-delete" title='Remover palpite' onClick={()=> deletarAposta(aposta)}/>
        </div>
      </div>
    </div>
  );
};

export default Cartela;
