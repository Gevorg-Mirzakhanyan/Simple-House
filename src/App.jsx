
import './App.scss';
import React from 'react';
import Header from './components/Home/Header/Header';
import Info from './components/Home/Info/Info';
import Button from './components/Home/Button/Button';
import Menu from './components/Home/Menu/Menu';
import Footer from './components/Home/Footer/Footer';
import SimpleSection from './components/Home/SimpleSection/SimpleSection';
import data from './components/Home/Menu/data';
import { BrowserRouter } from 'react-router-dom';


class App extends React.Component {
 
  render() {
  
    return ( 
      <BrowserRouter>
        <div className="App">
          <Header />
          <Info />
          <Button />
          <Menu data={data}/>
          <SimpleSection />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
