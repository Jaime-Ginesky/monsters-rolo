
import { Component } from 'react';

import './App.css';

class App extends Component {
 constructor() {
   super();

    this.state = {
      monster1: {
        name: 'Linda'
      },
      monster2: {
        name: 'Frank'
      },
      monster3: {
        name: 'Jacky'
      }
    };
 }
  render() {
  return (
    <div className="App">
       {this.state.monsters.map((monster) => {
        return <h1>{monster.name}</h1>
       })}
    </div>
  );
}
}


export default App;
