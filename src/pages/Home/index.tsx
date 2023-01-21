import { ReactComponent as MainImage } from 'assets/images/main-image.svg';
import ButtonIcon from 'components/ButtonIcon';
import { Link } from 'react-router-dom';
import './style.css';
const Home = () => {
  return (
    <div>
      <div className="home-container">
        <div className="base-card home-card">
          <div className="home-content-container">
            
            <div>
              <h1>O carro perfeito para você</h1>
              <p>
              Conheça nossos carros e dê mais um passo na realização do seu sonho.
              </p>
            </div>
            
          </div>
          
          <div className="home-image-container">
            <MainImage />
          </div>
        </div>

        <div className='card-bottom'>
              <Link to="/products">
                <ButtonIcon />
              </Link>
              Começar agora a navegar
            </div>
      </div>
    </div>
  );
};

export default Home;
