import { ReactComponent as MainImage } from 'assets/images/main-image.svg';
import ButtonIcon from 'components/ButtonIcon';
import Cartela from 'components/Cartela';
import PlayerCredit from 'components/PlayerCredit';
import RankingItem from 'components/RankingItem';
import { Link } from 'react-router-dom';
import './style.css';
const Home = () => {
  return (
    <div>
      <div className="home-container">
        <div className="home-left-container">
          <div className="home-left-container-top">
            <div className="home-left-container-top-left">
              <div className="home-left-container-top-left-top">
                <div className="home-left-container-top-left-top-title">
                  <div className="home-left-container-top-left-top-title-text">
                    <h3>JOGOS DA SEMANA</h3>
                    <h6>RODADA ABERTA</h6>
                    <p>Encerra em 25/10/2022 23:59:59</p>
                  </div>
                </div>
                <div className="home-left-container-top-right">
                  <PlayerCredit />
                  <ButtonIcon />
                </div>
              </div>
              <div className="home-left-container-top-left-area">
                <div className="container">
                  <div>
                    <Cartela />
                    <Cartela />
                    <Cartela />
                    <Cartela />
                    <Cartela />
                    <Cartela />
                    <Cartela />
                    <Cartela />
                    <Cartela />
                    <Cartela />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-right-container">
          <div className="home-right-container-top">RANKING</div>
          <div className="home-right-container-title">
            <div>PTS</div>
            <div>PLAYER</div>
          </div>
          <div className="my-3 container">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <RankingItem />
              </div>
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <RankingItem />
              </div>
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <RankingItem />
              </div>
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <RankingItem />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
