import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from '../../turma11/sd-011-project-frontend-online-store/src/pages/Home.js';
import ShoppingCart from '../../turma11/sd-011-project-frontend-online-store/src/pages/ShoppingCart';


function App() {
  return (
    <Router>
      <main className="App">
        <Switch>
          <Route path="/pages/shoppingcart" component={ ShoppingCart } />
          <Route path="/" component={ Home } />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
