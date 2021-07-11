import React from 'react';
import { BrowserRouter as Router ,Switch , Route } from 'react-router-dom'

import NavBar from './components/NavBar'

import Cart from './pages/Cart';
import Category from './pages/Category';
import Home from './pages/Home';
import Products from './pages/Products';
import Checkout from './pages/Checkout';

function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path="/"><Home/></Route>

        <Route exact path="/Cart"><Cart/></Route>

        <Route exact path="/Category"><Category/></Route>

        <Route exact path="/Products"><Products/></Route>

        <Route exact path="/Checkout"><Checkout/></Route>

      </Switch>
    </Router>
    
  );
}

export default App;
