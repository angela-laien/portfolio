import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Work from './components/Work';
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Nav from './components/Navbar';


function App() {
  return (
    <Router>
       <div className="App">
         <Switch>
          <Route exact path='/portfolio'>
            <Home />
          </Route>
          <Route exact path='/work'>
            <Nav />
            <Work />
          </Route>
          <Route exact path='/about'>
            <Nav />
            <About />
          </Route>
          <Route exact path='/skills'>
            <Nav />
            <Skills />
          </Route>
          <Route exact path='/contact'>
            <Nav />
            <Contact />
          </Route>
         </Switch>
      </div>
    </Router>
  );
}

export default App;
