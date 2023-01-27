import './style.css';
import olho from 'assets/images/olho.png';

const RankingItem = () => {
  return (
    <>
      <div className="ranking-container">
        <div className="ranking-position">12</div>
        <div className="ranking-ident">
          <div>JOÃO CARLOS</div>
          <p>C73D547</p>
        </div>
        <img alt=""
          src={olho}
          className="ranking-img"
        />
      </div>
    </>
  );
};

export default RankingItem;
