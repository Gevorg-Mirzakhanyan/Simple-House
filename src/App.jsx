
import './App.scss';
import React from 'react';

import {Switch, Route} from 'react-router-dom';
import Homes from './pages/Home/Homes'
import Header from './components/Header/Header';
import About from './pages/About/About';
import Footer from './components/Footer/Footer';
import Contact from './pages/Contact/contact';


class App extends React.Component {
 
  render() {
    return (
      
      <div className='app'>

        <Header />
        <Switch>
            <Route  path={'/'} exact>
                <Homes />
            </Route>
            <Route exact path={'/About'}>
                <About />
            </Route>
            <Route exact path={'/Contact'}>
                <Contact />
            </Route>
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App;
