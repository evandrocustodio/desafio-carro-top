import './style.css';
import { ReactComponent as Seta } from 'assets/images/seta.svg';
type Props = {
  action?: any;
  text: string;
}
const ButtonIcon = ({action, text}:Props) => {
  return (
    <div className="btn-container">
      <button className="btn btn-primary" onClick={action}>
        <h6>{text}</h6>
      </button>

      <div className="btn-icon-container">
        <Seta />
      </div>
    </div>
  );
};

export default ButtonIcon;
