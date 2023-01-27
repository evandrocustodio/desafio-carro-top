import { useState, useEffect } from 'react';
import api from 'api';
import format from 'date-fns/format';

import sha256 from 'crypto-js/sha256';
import ButtonIcon from 'components/ButtonIcon';
import Cartela from 'components/Cartela';
import PlayerCredit from 'components/PlayerCredit';
import RankingItem from 'components/RankingItem';
import './style.css';
import ApostaDTO from 'Objects/ApostaDTO';
import JogoDTO from 'Objects/JogoDTO';
import RodadaDTO from 'Objects/RodadaDTO';
import { formatInTimeZone } from 'date-fns-tz';

const Home = () => {
  const [apostador, setApostador] = useState(1);
  const [resumo, setResumo] = useState({
    totalArrecadado: 0,
    valorUnitario: 0,
    totalServico: 0,
    valorGarantia: 0,
    valorPremiacao: 0,
    totalRodada: 0,
    qtdCartelas: 0,
    acumulado: 0,
  });

  const [isReloading, setIsReloading] = useState(false);
  const TIPO_PALPITES = ['EMPATE', 'CASA', 'FORA'];

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
    const carregarDados = async () => {
      let rodada: RodadaDTO = await (await api.get(`rodadas/ativa`)).data;
      setRodada(rodada);

      const a = await api.get(
        `apostadores/${apostador}/rodada/${rodada?.id}/apostas`
      );
      setApostas(a.data);

      const j = await api.get(`rodadas/${rodada?.id}/jogos`);
      setJogos(j.data);

      const resumoRodada = resumo;
      resumoRodada.qtdCartelas = rodada.apostas;
      resumoRodada.valorUnitario = rodada ? rodada.valor : 0;
      resumoRodada.totalArrecadado = rodada ? rodada.valor * rodada.apostas : 0;
      resumoRodada.valorGarantia = rodada
        ? (resumo.totalArrecadado > rodada.premio ? 0 : rodada.premio - resumo.totalArrecadado)
        : 0;
      resumoRodada.totalRodada =
        resumo.totalArrecadado + resumoRodada.valorGarantia;
      resumoRodada.totalServico = rodada
        ? resumoRodada.totalRodada * rodada.txServico
        : 0;

      resumoRodada.acumulado = rodada
        ? resumo.totalRodada * rodada.percAcumulado
        : 0;

      resumoRodada.valorPremiacao = rodada
        ? resumo.totalRodada * rodada.percPremio
        : 0;

      setResumo(resumoRodada);
    };

    carregarDados();
  }, [isReloading, apostador]);

  const configura = async (posic: number, opt: number) => {
    palpites[posic] = opt;
    setPalpites(palpites);

    reload();
  };

  const valorPalpite = (posic: number) => {
    return TIPO_PALPITES[palpites[posic]];
  };

  const salvarAposta = async () => {
    const a = apostador.toString().padStart(7, '0');
    const r = rodada?.id.toString().padStart(7, '0');
    const d = formatInTimeZone(
      new Date(),
      'America/Fortaleza',
      'dd/MM/yyyy hh:mm'
    );
    const p = palpites.toString().replaceAll(',', '');
    const hash = sha256(d + r + a + p).toString();
    await api.post(`apostas`, {
      rodada: rodada?.id,
      apostador: apostador,
      hash,
      data: d,
      palpites: p,
    });
    setIsNew(false);
    reload();
  };

  const reload = () => {
    setIsReloading(!isReloading);
  };

  const formataValor = (valor: number) => {
    return Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(valor);
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
                    <h6>{rodada?.id}ª RODADA ABERTA</h6>
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
                        apostas.map((c) => (
                          <Cartela
                            key={c.id}
                            aposta={c}
                            jogos={jogos}
                            reload={reload}
                          />
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
                            alt=""
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
                            alt=""
                            src={j.timeFora.logo}
                            onClick={() => configura(x, 2)}
                          />
                        </div>
                      ))}
                    </div>
                    <div className="container">
                      {palpites?.map((j, x) => (
                        <div
                          key={x}
                          className="container-item-nova-aposta-palpite"
                        >
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
          <div>
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
          <div className="home-right-container-dados">
            <div className="home-right-container-top">RESUMO DA RODADA</div>
            <div className="dados">
              <h1>CARTELAS</h1>
              <h2>{resumo.qtdCartelas}</h2>
            </div>
            <div className="dados">
              <h1>VALOR UNITÁRIO</h1>
              <h2> {formataValor(resumo.valorUnitario)}</h2>
            </div>
            <div className="dados">
              <h1>TOTAL ARRECADADO</h1>
              <h2>{formataValor(resumo.totalArrecadado)}</h2>
            </div>

            {resumo.valorGarantia > 0 && (
              <div className="dados">
                <h1>GARANTIA</h1>
                <h3>{formataValor(resumo.valorGarantia)}</h3>
              </div>
            )}
            <div className="dados">
              <h1>TOTAL DA RODADA </h1>
              <h3> {formataValor(resumo.totalRodada)}</h3>
            </div>
            <div className="dados">
              <h1>PREMIO DA RODADA {rodada ? rodada.percPremio * 100 : 0}%</h1>
              <h3> {formataValor(resumo.valorPremiacao)}</h3>
            </div>
            <div className="dados">
              <h1>ACUMULADO {rodada ? rodada.percAcumulado * 100 : 0}%</h1>
              <h3>{formataValor(resumo.acumulado)}</h3>
            </div>
            <div className="dados">
              <h1>TX SERVIÇOS {rodada ? rodada.txServico * 100 : 0}%</h1>
              <h2>{formataValor(resumo.totalServico)}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
