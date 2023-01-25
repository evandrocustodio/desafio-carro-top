import './style.css';
import { ReactComponent as Seta } from 'assets/images/seta.svg';
const ButtonIcon = () => {
  return (
    <div className="btn-container">
      <button className="btn btn-primary">
        <h6>NOVO</h6>
      </button>

      <div className="btn-icon-container">
        <Seta />
      </div>
    </div>
  );
};

export default ButtonIcon;
