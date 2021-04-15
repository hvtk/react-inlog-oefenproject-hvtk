import React from "react";

import './App.css';
import {BrowserRouter as Router, Switch, Route,} from 'react-router-dom';
import Loginpagina from './pages/Login.js';
import Homepage from './pages/Home.js';
import Profielpagina from './pages/Profiel.js';
import Registreerpagina from './pages/Registreer.js';

function App() {

  return (
      <Router>
        <Switch>
           <Route exact path="/">
            <Homepage />
           </Route>
           <Route path="/sign-in">
            <Loginpagina />
           </Route>
           <Route path="/profile">
            <Profielpagina />
           </Route>
           <Route path="/sign-up">
            <Registreerpagina />
           </Route>
        </Switch>
      </Router>
  );
}

export default App;
