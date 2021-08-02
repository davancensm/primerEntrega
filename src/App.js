import React from 'react';
import { BrowserRouter as Router ,Switch , Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Cart from './pages/Cart';
import Category from './pages/Category';
import Home from './pages/Home';
import Products from './pages/Products';
import Checkout from './pages/Checkout';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { CartProvider } from './components/CartContext';

function App() {
  return (
    <CartProvider>
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path="/home"><Home/></Route>

        <Route exact path="/cart"><Cart/></Route>

        <Route exact path="/category"><Category/></Route>

        <Route exact path="/products"><Products/></Route>

        <Route exact path="/checkout"><Checkout/></Route>

        <Route exact path="/"><ItemListContainer/></Route>

        <Route exact path="/category/:categoryId"><ItemListContainer/></Route>

        <Route exact path="/item/:id"><ItemDetailContainer/></Route>
      </Switch>
    </Router>
    </CartProvider>
  );
}

export default App;
