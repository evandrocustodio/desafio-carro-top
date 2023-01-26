import { useState, useEffect } from 'react';
import api from 'api';
import format from 'date-fns/format';

import ButtonIcon from 'components/ButtonIcon';
import Cartela from 'components/Cartela';
import PlayerCredit from 'components/PlayerCredit';
import RankingItem from 'components/RankingItem';
import './style.css';
import ApostaDTO from 'Objects/ApostaDTO';
import JogoDTO from 'Objects/JogoDTO';
import RodadaDTO from 'Objects/RodadaDTO';
const Home = () => {
  const [isReloading,setIsReloading] = useState(false);
  const tipoPalpites = ['EMPATE', 'CASA', 'FORA'];
  
  const [palpites, setPalpites] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);

  const [isNew, setIsNew] = useState(false);
  const [apostas, setApostas] = useState<ApostaDTO[]>();
  const [rodada, setRodada] = useState<RodadaDTO>();
  const [jogos, setJogos] = useState<JogoDTO[]>();

  const novaAposta = () => {
    setPalpites([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    setIsNew(true);
  };

  useEffect(() => {
    const carregarRodada = async () => {
      const r = await api.get(`rodadas/1`);
      setRodada(r.data);
    };

    const carregarApostas = async () => {
      const lstApostas = await api.get(`apostadores/1/rodada/1/apostas`);
      setApostas(lstApostas.data);
    };

    const carregarJogosRodada = async () => {
      const r = await api.get(`rodadas/1/jogos`);
      setJogos(r.data);
    };

    carregarRodada();
    carregarJogosRodada();
    carregarApostas();
  
  }, [isReloading]);

  
  const configura = async (posic: number, opt: number) => {
    palpites[posic] = opt;
    setPalpites(palpites);

     const r = await api.get(`rodadas/1/jogos`);
     setJogos(r.data);
   
  };

  const valorPalpite = (posic: number) => {
    return tipoPalpites[palpites[posic]];
  };

  const salvarAposta = async () => {
    await api.post(`apostas`, {rodada: 1, apostador: 1,  palpites: palpites.toString().replaceAll(",","")});
    setIsNew(false);
    setIsReloading(!isReloading);
  };

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
                    <p>
                      Encerra em{' '}
                      {format(
                        rodada ? new Date(rodada.dtaFechamento) : new Date(),
                        'dd/MM/yyyy hh:mm:ss'
                      )}
                    </p>
                  </div>
                </div>
                <div className="home-left-container-top-right">
                  <PlayerCredit />
                  {!isNew && (
                    <ButtonIcon text="NOVO" action={() => novaAposta()} />
                  )}
                  {isNew && (
                    <ButtonIcon text="SALVAR" action={() => salvarAposta()} />
                  )}
                </div>
              </div>
              <div className="home-left-container-top-left-area">
                {!isNew && (
                  <div className="container">
                    <div>
                      {apostas &&
                        apostas.map((j) => (
                          <Cartela key={j.id} aposta={j} jogos={jogos} />
                        ))}
                    </div>
                  </div>
                )}
                {isNew && (
                  <div className="big-container">
                    <div className="container">
                      {jogos?.map((j, x) => (
                        <div key={x} className="container-item-nova-aposta">
                          <div className="container-item-nova-aposta-ordem">
                            j{j.ordem}
                          </div>
                          <img
                            src={j.timeCasa.logo}
                            onClick={() => configura(x, 1)}
                          />
                          <div
                            className="container-item-nova-aposta-empate"
                            onClick={() => configura(x, 0)}
                          >
                            X
                          </div>
                          <img
                            src={j.timeFora.logo}
                            onClick={() => configura(x, 2)}
                          />
                        </div>
                      ))}
                    </div>
                    <div className="container">
                      {palpites?.map((j, x) => (
                        <div key={x} className="container-item-nova-aposta-palpite">
                          {valorPalpite(x)}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
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
