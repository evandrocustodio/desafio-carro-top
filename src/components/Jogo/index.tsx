import NavBar from 'components/Navbar';
import './style.css';
type Prop = {
  casa: string;
  fora: string;
};
const Jogo = ({ casa, fora }: Prop) => {
  return (
    <div className="jogo-container">
      <div className="jogo-container-header">
        {casa} x {fora}
      </div>
      <div className="itens-jogos-logo">
        <div className="sinalizador-red" />
        <img
          src="https://s.sde.globo.com/media/organizations/2018/04/10/Flamengo-2018.svg"
          width="25px"
        />
      </div>
    </div>
  );
};
export default Jogo;
