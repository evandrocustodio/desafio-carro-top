import './style.css';

const Regras = () => {
  return (
    <>
      <div className="regras-container">
        <div className="regras-top">
          <div className="regras-title">REGRAS GERAIS</div>
          <div className="regras-body">
            <ul>
              <li>
                Cada jogador poderá adquerir quantas cartelas desejar até zerar
                o saldo da sua carteira.
              </li>
              <li>
                Uma rodada terá <strong>12 jogos</strong> de futebol que serão
                relizados na semana.
              </li>
              <li>
                Caso algum jogo venha a ser cancelado,
                <strong> a pontuação será nula para todas as cartelas.</strong>
              </li>
              <li>
                O jogador deverá escolher para cada um dos jogos o resultado
                esperado: <strong>CASA, FORA ou EMPATE</strong>.
              </li>
              <li>
                Cada resultado correto valerá <strong>1 ponto</strong> na
                cartela
              </li>

              <li>
                O Jogador que alcançar <strong>12 pontos</strong> na rodada
                levará o <strong>prêmio acumulado</strong>.
              </li>
              <li>
                O Jogador que alcançar <strong>8 ou mais pontos</strong> na
                rodada levará o <strong>prêmio da rodada</strong>.
              </li>
              <li>
                Caso nenhum jogador alcançe <strong>8 ou mais pontos</strong> na
                rodada, o <strong>prêmio da rodada</strong> deverá ser acumulado
                e pago como prêmio da rodada seguinte.
              </li>
              <li>
                O Jogador que alcançar menos pontos na rodada levará o 
                <strong> prêmio da consolação</strong>.
              </li>
              <li>
                A cada <strong>10 rodadas</strong> o valor acumulado será pago
                ao maior pontuador da rodada.
              </li>
              <li>
                Em caso de empate, o <strong>prêmio será divido</strong> entre
                os jogadores com a maior pontuação.
              </li>
            </ul>
          </div>
        </div>
        <div className="regras-top">
          <div className="regras-title">PRÊMIOS</div>
          <div className="regras-body">
            <table>
              <tr>
                <td
                  style={{ width: '200px', height: 100, verticalAlign: 'top' }}
                >
                  <strong>12 PONTOS</strong>
                </td>
                <td
                  style={{
                    fontSize: '18px',
                    fontWeight: 'normal',
                    verticalAlign: 'top',
                  }}
                >
                  <strong>PRÊMIO DE ACUMULADO</strong> <br />
                  Consiste no valor acumulado nas rodadas anteriores.
                </td>
              </tr>
              <tr>
                <td
                  style={{ width: '200px', height: 100, verticalAlign: 'top' }}
                >
                  <strong>8+ PONTOS</strong>
                </td>
                <td
                  style={{
                    fontSize: '18px',
                    fontWeight: 'normal',
                    verticalAlign: 'top',
                  }}
                >
                  <strong>PRÊMIO DA RODADA</strong> <br />
                  Consiste a 65% do total arrecadado com as cartelas adqueridas
                  na rodada;
                </td>
              </tr>
              <tr>
                <td
                  style={{ width: '200px', height: 100, verticalAlign: 'top' }}
                >
                  <strong>7- PONTOS</strong>
                </td>
                <td
                  style={{
                    fontSize: '18px',
                    fontWeight: 'normal',
                    verticalAlign: 'top',
                  }}
                >
                  <strong>RODADA ACUMULADA</strong> <br />
                  Todo o PRÊMIO DA RODADA será acumulado para a rodada seguinte.
                </td>
              </tr>
              <tr>
                <td
                  style={{ width: '200px', height: 100, verticalAlign: 'top' }}
                >
                  <strong>- PONTOS</strong>
                </td>
                <td
                  style={{
                    fontSize: '18px',
                    fontWeight: 'normal',
                    verticalAlign: 'top',
                  }}
                >
                  <strong>PRÊMIO DE CONSOLAÇÃO</strong> <br />O jogador{' '}
                  <strong>ganhará um crédito em sua carteira</strong>, no valor
                  da cartela, que poderá ser utilizado em rodadas futuras.
                </td>
              </tr>
              <tr>
                <td
                  style={{ width: '200px', height: 100, verticalAlign: 'top' }}
                >
                  <strong>OBSERVAÇÃO</strong>
                </td>
                <td
                  style={{
                    fontSize: '18px',
                    fontWeight: 'normal',
                    verticalAlign: 'top',
                  }}
                >
                  <strong>PRÊMIO GARANTIDO</strong>
                  <br />
                  Se o valor arrecadado for menor que R$ 200,00 (Duzentos
                  reais), o prêmio da rodada será garatido.
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Regras;
