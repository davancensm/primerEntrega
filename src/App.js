import React from 'react';
import { BrowserRouter as Router ,Switch , Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Cart from './pages/Cart';
import Category from './pages/Category';
import Home from './pages/Home';
import Products from './pages/Products';
import Checkout from './pages/Checkout';
import ProductDetail from './pages/ProductDetail'
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path="/home"><Home/></Route>

        <Route exact path="/cart"><Cart/></Route>

        <Route exact path="/category"><Category/></Route>

        <Route exact path="/products"><Products/></Route>

        <Route exact path="/checkout"><Checkout/></Route>

        <Route exact path="/"><ItemListContainer/></Route>

        <Route exact path="/category/:id"><ItemListContainer/></Route>

        <Route exact path="/item/:id"><ItemDetailContainer/></Route>
      </Switch>
    </Router>
    
  );
}

export default App;
