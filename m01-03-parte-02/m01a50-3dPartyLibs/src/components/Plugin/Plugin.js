import React, { Component } from 'react';

class Plugin extends Component {

  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
  console.warn('clicou', this.myInput)

  this.myInput.focus()
  }

  /*
    O ref recebe o nó (referência) do dom do componente em que está, assim que o render for executado.
    Com isso é possível manipular o Dom. Para usar libs de terceiros é util ter acesso ao elemento do dom.
    No momento em que esse componente é desmontado, o ref é anulado.
    Só é possível usar ref em componentes do tipo class ou usando o react.createClass

  */

  render() {
    return (
      <div style={{display: 'flex',justifyContent: 'center'}}>
        <input type="text" ref={(node) => (this.myInput = node)} />
        <button onClick={this.handleClick}>Focus</button>
      </div>
    )
  }
}

export default Plugin;
