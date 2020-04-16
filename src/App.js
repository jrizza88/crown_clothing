import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from "./Pages/HomePage/HomePage";
import ShopPage from "./Pages/Shop/ShopPage";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={ HomePage }/>
        <Route  path='/shop' component={ShopPage }/>
      </Switch>
    </div>
  );
}

export default App;
