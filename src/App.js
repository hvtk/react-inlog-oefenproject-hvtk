import './App.css';
import {BrowserRouter as Router, Switch, Route,} from 'react-router-dom';

function App() {
  return (
      <Router>
        <Switch>
           <Route exact path="/">
            <Homepage />
           </Route>
           <Route path="/sign-in">
            <loginpagine />
           </Route>
           <Route path="/profile">
            <profielpagina />
           </Route>
           <Route path="/sign-up">
            <registreerpagina />
           </Route>
        </Switch>
      </Router>
  );
}

export default App;
