import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import LayoutCore from './components/LayoutCore';

function App() {
  return (
    <div className="App">
      <Header/>
      <LayoutCore />
    </div>
  );
}

export default App;
