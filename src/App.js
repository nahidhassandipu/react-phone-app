import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import logo from './logo.png';
import './App.css';
import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Default from "./components/Default";
import Cart from './components/Cart';
import Modal from './components/Modal';

class App extends Component {

  render() {
    return (
    
      <BrowserRouter>
        <React.Fragment>
          <div className="App">
            <header className="App-header p-2">
              <img src={logo} className="App-logo" alt="logo" />
              <NavBar/>
            </header>
            <Switch>
              <Route exact path="/" render={() => <ProductList />} />
              <Route path="/details" component={Details}/>
              <Route path="/cart" component={Cart}/>
              <Route component={Default}/>
            </Switch>
            <Modal />
          </div>
        </React.Fragment>
      </BrowserRouter>

    );
  }
}

export default App;
