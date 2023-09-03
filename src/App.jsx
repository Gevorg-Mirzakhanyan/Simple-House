
import './App.scss';
import React from 'react';
import Header from './components/Header';
import Info from './components/Info';
import Button from './components/Button';
import Menu from './components/Menu';
import Footer from './components/Footer';
import SimpleSection from './components/SimpleSection';
import data from './components/data';

class App extends React.Component {
 
  render() {
 




    return (
      <div className="App">
        <Header />
        <Info />
        <Button />
        <Menu data={data}/>
        <SimpleSection />
        <Footer />
      </div>
    );
  }
}

export default App;
