import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from "./Pages/HomePage/HomePage";
import ShopPage from "./Pages/Shop/ShopPage";
import SignInAndSignUpPage from './Pages/SignIn-and-SignUp/SignInAndSignUpPage';
import Header from "./Components/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={ HomePage }/>
        <Route  path='/shop' component={ShopPage }/>
        <Route path='/signin' component={SignInAndSignUpPage}/>
      </Switch>
    </div>
  );
}

export default App;
