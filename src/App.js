import React, { useState } from 'react'
import './App.css';
import config from './config.js'

function App() {
  const [state, setState] = useState(config)
  return (
    <div className="App" style={{backgroundColor: state.bg_color}}>
      <header className="App-header">
        <img src={config.logo} className="App-logo" alt="logo" />
        <p>
          {state.copy}
        </p>
        {state.link_components}
      </header>
    </div>
  );
}

export default App;
