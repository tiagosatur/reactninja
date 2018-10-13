import React, { Component } from 'react';
import sumtest from './components/sum/SumTest'
import './style/App.css';

class App extends Component {
  /*

  */


  sum(x, y) {
    return x + y;
  }

  sumTest(x, y, z) {
    return x + y === z ? 'True ': 'False';
  }

  render() {
    return (
      <div className='container' style={{display: 'flex', flexDirection:'column', justifyContent: 'center'}}>
          <h3 style={{display: 'flex', justifyContent: 'center'}}>Tests Overview</h3>
          <h3>Realiza a soma</h3>

          2 + 3 = { this.sum(2, 3) }

          <h3>Testa a soma</h3>
          2 + 7 é igual a 9? { this.sumTest(2, 7, 9) }

          <h2>Test Driven Development (TDD)</h2>
          <p>Desenvolver a aplicação guiado por testes.</p>
          <p>Antes de escrever o código, primeiro você escreverá um teste e depois implementará a funcionalidade.</p>
          <p>É sempre recomendado escrever TDD seguindo o processo de baby steps, isto é, escrever testes bem pequenos, para somente no passo de refactor, transformar em um código mais robusto.</p>
          <p>O TDD segue 3 passos: red, green e blue</p>

          <h3 style={{display: 'flex', alignItems: 'center'}}>1) RED  <span style={{background: 'red', height: '20px', width: '20px', display: 'inline-block', borderRadius: '50%', margin: '0 0 0 16px'}}></span></h3>
          <p>Escrever o teste para uma aplicação inexistente e executar o teste. Ele vai quebrar, pois você ainda não tem a implementação.</p>


          <h3 style={{display: 'flex', alignItems: 'center'}}>2) GREEN  <span style={{background: 'green', height: '20px', width: '20px', display: 'inline-block', borderRadius: '50%', margin: '0 0 0 16px'}}></span></h3>
          <p>Faça a implementação do código e execute o teste. Ele deve passar.</p>

          <h3 style={{display: 'flex', alignItems: 'center'}}>3) BLUE  <span style={{background: 'mediumblue', height: '20px', width: '20px', display: 'inline-block', borderRadius: '50%', margin: '0 0 0 16px'}}></span></h3>
          <p>É o momento de refatorar o código. Você escreveu código duplicado? Alguma coisa pode ser melhorada? Nesse passo, nenhum teste anterior deve quebrar.</p>
          <p>Você Não deve escrever novas funcionalidades nessa etapa</p>

          <strong>Depois disso... Repita o processo para cada funcionalidade que você deseja implemenetar.</strong>

        <h2>Testes Unitários</h2>
        <p>
          O teste unitário testa cada parte do componente, cada função ou mudança que houver nele.
        </p>
        <p>
          Como esses testes precisam executar muito rápido.
          Por isso, é melhor executá-los usando node, enquanto está desenvolvendo, e não no browser.
        </p>
        <p>
          No terminal, acesse a pasta src/components/title/ e execute o comando:
          <code>
            <pre>
              node TitleTest.js
            </pre>
          </code>
        </p>
        <p>
          Você verá o resultado:
          <pre>
            <code>
              h1 <br />
              All tests passed successfully!
            </code>
          </pre>
        </p>


        <span>Esse é o teste que está sendo feito</span>
        <pre>
          <code>
            const TitleComponent = ReactDOMServer.renderToStaticMarkup( <br />
              React.createElement(Title) <br />
            ) <br /> <br />

            console.log($(TitleComponent).get(0).tagName); //Retorna qual tag está sendo usada <br /> <br />

            console.assert($(TitleComponent).get(0).tagName === 'h1', 'Should be an h1 tag') <br /> <br />

            console.log('All tests passed successfully!')
          </code>
        </pre>

      </div>
    );
  }
}

export default App;
