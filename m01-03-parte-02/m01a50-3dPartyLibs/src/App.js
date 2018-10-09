import React, { Component } from 'react';
import ajax from '@fdaciuk/ajax'
import './style/App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      state: false,

    }
	}

  render() {
    return (
      <div>
        <h3>Third party libs with React</h3>
      </div>
    );
  }
}

export default App;
