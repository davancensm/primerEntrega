import React from 'react';
import { BrowserRouter as Router ,Switch , Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Cart from './pages/Cart';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { CartProvider } from './components/CartContext';

function App() {
  return (
    <CartProvider>
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path="/cart"><Cart/></Route>

        <Route exact path="/"><ItemListContainer/></Route>

        <Route exact path="/category/:categoryId"><ItemListContainer/></Route>

        <Route exact path="/item/:id"><ItemDetailContainer/></Route>
      </Switch>
    </Router>
    </CartProvider>
  );
}

export default App;
