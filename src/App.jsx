
import './App.scss';
import React from 'react';
import About from './components/About/About';
import {Switch, Route} from 'react-router-dom';

import Homes from './components/Home/Homes';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/contact';





class App extends React.Component {
 
  render() {
    return (
      
      <>

        <Header />

        <Switch>
            <Route  path={'/'} exact>
              <Homes />
            </Route>
            <Route  path={'/Home'}>
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
    
      </>
   
    )
  }
}

export default App;
