import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from "./Pages/HomePage/HomePage";
import ShopPage from "./Pages/Shop/ShopPage";
import SignInAndSignUpPage from './Pages/SignIn-and-SignUp/SignInAndSignUpPage';
import Header from "./Components/Header/Header";
import { auth } from './Firebase/firebase.utils';


class App extends React.Component {

  constructor(){
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user})

      console.log('user: ', user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render(){
  return (
    <div>
      <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path='/' component={ HomePage }/>
        <Route  path='/shop' component={ShopPage }/>
        <Route path='/signin' component={SignInAndSignUpPage}/>
      </Switch>
    </div>
    );
  }
    
}

export default App;
