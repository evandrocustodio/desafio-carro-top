import { useState } from 'react';
import './style.css';
import api from 'api';

const Acesso = () => {
  const [texto,setTexto] = useState("");

  const apertou = async () => {
    const retorno = [];
    const a = texto.replaceAll('\n', '#')
    const linhas = a.split("#");
    //
    let prox = 1;
    for (let index = 0; index < linhas.length; index++) {           
      if (index === prox ) {
        const L1 = linhas[index].split(" ");
        const DATA = L1[1]+" "+L1[L1.length-1];
        const CASA = linhas[index+1].substring(0,3);
        const foraa =linhas[index+4].split(" ");
        const FORA = foraa[foraa.length-1];
        const PLACAR = linhas[index+2] + " x "+linhas[index+3];        

        const C = await api.get(`equipes/${CASA}/sigla`);
        const F = await api.get(`equipes/${FORA}/sigla`);

        retorno.push(C.data.id+" "+ CASA+" "+F.data.id+" "+FORA+" "+PLACAR+" "+DATA+'\n');
        prox= index +6 
      }
    }      
    setTexto(retorno.toString().replaceAll(',', ''))
  }
  const alterarTexto = (event: any) => {
    setTexto(event.target.value);
  }

  return (
    <>      
      <textarea className='courier' rows={30} cols={277} value={texto} onChange={alterarTexto}/>
      <button className='my-button' onClick={() => apertou()} >IMPORTAR JOGOS</button>
    </>
  );
};

export default Acesso;
