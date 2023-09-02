
import './App.css';
import React from 'react';
import Header from './components/Header';
import Info from './components/Info';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Info />
      </div>
    );
  }
}

export default App;
