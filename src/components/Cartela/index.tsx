import Jogo from 'components/Jogo';
import JogoDTO from 'Objects/JogoDTO';
import './style.css';
const Cartela = () => {
  const jogos:JogoDTO[] = [
    {
      casa: {
        equipe: 'COR',
        logo: 'https://s.sde.globo.com/media/organizations/2019/09/30/Corinthians.svg',
      },
      fora: {
        equipe: 'FLA',
        logo: 'https://s.sde.globo.com/media/organizations/2018/04/10/Flamengo-2018.svg',
      },
      palpite: 1,
      resultado: 1,
    },
    {
      casa: {
        equipe: 'SPT',
        logo: 'https://s.sde.globo.com/media/organizations/2018/03/11/sport.svg',
      },

      fora: {
        equipe: 'CEA',
        logo: 'https://s.sde.globo.com/media/organizations/2018/04/10/Flamengo-2018.svg',
      },
      palpite: 1,
      resultado: 0,
    },
    {
      casa: {
        equipe: 'LIV',
        logo: 'https://s.sde.globo.com/media/teams/2018/03/12/liverpool.svg',
      },
      fora: {
        equipe: 'NAP',
        logo: 'https://s.sde.globo.com/media/organizations/2018/07/30/NAPOLI_SVG.svg',
      },
      palpite: 1,
      resultado: 1,
    },
    {
      casa: {
        equipe: 'CFC',
        logo: 'https://s.sde.globo.com/media/organizations/2018/03/11/coritiba.svg',
      },

      fora: {
        equipe: 'AVA',
        logo: 'https://s.sde.globo.com/media/organizations/2018/09/04/avai-futebol-clube.svg',
      },
      palpite: 1,
      resultado: 0,
    },
    {
      casa: {
        equipe: 'COR',
        logo: 'https://s.sde.globo.com/media/organizations/2019/09/30/Corinthians.svg',
      },
      fora: {
        equipe: 'FLA',
        logo: 'https://s.sde.globo.com/media/organizations/2018/04/10/Flamengo-2018.svg',
      },
      palpite: 1,
      resultado: 1,
    },
    {
      casa: {
        equipe: 'CUI',
        logo: 'https://s.sde.globo.com/media/organizations/2018/12/26/Cuiaba_EC.svg',
      },

      fora: {
        equipe: 'JUV',
        logo: 'https://s.sde.globo.com/media/organizations/2021/04/29/Juventude-2021-01.svg',
      },
      palpite: 1,
      resultado: 0,
    },
    {
      casa: {
        equipe: 'COR',
        logo: 'https://s.sde.globo.com/media/organizations/2019/09/30/Corinthians.svg',
      },
      fora: {
        equipe: 'CAM',
        logo: 'https://s.sde.globo.com/media/organizations/2018/03/10/atletico-mg.svg',
      },
      palpite: 1,
      resultado: 1,
    },
    {
      casa: {
        equipe: 'CAP',
        logo: 'https://s.sde.globo.com/media/organizations/2019/09/09/Athletico-PR.svg',
      },

      fora: {
        equipe: 'SAO',
        logo: 'https://s.sde.globo.com/media/organizations/2018/03/11/sao-paulo.svg',
      },
      palpite: 1,
      resultado: 0,
    },
    {
      casa: {
        equipe: 'CEA',
        logo: 'https://s.sde.globo.com/media/organizations/2019/10/10/ceara.svg',
      },
      fora: {
        equipe: 'INT',
        logo: 'https://s.sde.globo.com/media/organizations/2018/03/11/internacional.svg',
      },
      palpite: 1,
      resultado: 1,
    },
    {
      casa: {
        equipe: 'FOR',
        logo: 'https://s.sde.globo.com/media/organizations/2021/09/19/Fortaleza_2021_1.svg',
      },

      fora: {
        equipe: 'SAN',
        logo: 'https://s.sde.globo.com/media/organizations/2018/03/12/santos.svg',
      },
      palpite: 1,
      resultado: 0,
    },
    {
      casa: {
        equipe: 'FLU',
        logo: 'https://s.sde.globo.com/media/organizations/2018/03/11/fluminense.svg',
      },
      fora: {
        equipe: 'PAL',
        logo: 'https://s.sde.globo.com/media/organizations/2019/07/06/Palmeiras.svg',
      },
      palpite: 1,
      resultado: 1,
    },
    {
      casa: {
        equipe: 'BOT',
        logo: 'hhttps://s.sde.globo.com/media/organizations/2019/02/04/botafogo-svg.svg',
      },

      fora: {
        equipe: 'RBB',
        logo: 'https://s.sde.globo.com/media/organizations/2021/06/28/bragantino.svg',
      },
      palpite: 2,
      resultado: 0,
    },
  ];

  return (
    <div className="itens">
      <div className="itens-left">
        <div className="itens-id">C73D5A7</div>
        <div className="itens-date">22/05/2022 17:15</div>
      </div>
      <div className="itens-right">
        {jogos.map((a: JogoDTO) => (
          <Jogo
            casa={a.casa}
            fora={a.fora}
            palpite={a.palpite}
            resultado={a.resultado}
          />
        ))}
      </div>
      <div className="itens-right">
        <div className="itens-right-total">
          <div className="itens-right-total-titulo">PONTOS</div>
          <div className="itens-right-total-pontos">12</div>
        </div>
      </div>
    </div>
  );
};

export default Cartela;
