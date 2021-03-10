import React from 'react';
import Agence from './components/Agence.component';
import './App.css';

/**
 *  La vue principale
 */
const App: React.FunctionComponent = () => (
    <div className="App">
      <h1>Gestion des agences</h1>
      <Agence />
    </div>
  );

export default App;