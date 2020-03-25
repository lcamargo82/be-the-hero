//import React, { useState} from 'react';
import './global.css';

//o {useStatte} é para manipular o estado

//Quando o html está dentro do javascript, é chamado de jsx (javascript e xml)

//O conceito de propriedade no eact é semelhante ao do html em relação a atributo

//como não havera conteudo dentro das tags do header, podera fechar conforma abaixo

//Estado é a informacao que será mantida pelo componente, tendo que realizar um CRUD, nao se usa uma variavel comum e sim um estado

//Para haver mais de uma tag em return... é necessario envolver em um tag div por exemplo

//imutabilidade - por questao de performace, nao se pode manipoular a variavel do estado diretamente, sendo necessario sobrepor o valor do estado 

import Routes from './routes';
//import { Route } from 'react-router-dom';

//exemplo
function App() {
  //let counter = useState(0);

  //o counter e a variavel em si que recebe o valor e o setCounter e a funcao que ira mudar o valor do counter
  //exemplo inicial
  //const [ counter, setCounter] = useState(0);

  //quando se usa o metodo useState, o retorno e um array com duas posicoes, a primeira posicao e o valor e a segunda posicao e uma funcao de atualizacao do valor
  //exemplo inicial
  // function Increment() {
  //   setCounter(counter + 1);
  // }

  return (
    <Routes />
  );
}

export default App;
