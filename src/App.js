import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import HomePage from "./Pages/HomePage/HomePage";
import ShopPage from "./Pages/Shop/ShopPage";
import SignInAndSignUpPage from './Pages/SignIn-and-SignUp/SignInAndSignUpPage';
import Header from "./Components/Header/Header";
import { auth, createUserProfileDocument } from './Firebase/firebase.utils';
import {connect} from 'react-redux';
import { setCurrentUser } from "./redux/user/user.actions";

class App extends React.Component {

  // constructor(){
  //   super();
  //   this.state = {
  //     currentUser: null
  //   }
  // }

  unsubscribeFromAuth = null

  componentDidMount(){
const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
     if(userAuth) {
       const userRef = await createUserProfileDocument(userAuth);

       userRef.onSnapshot(snapShot => {
        //  console.log(snapShot.data())
        // this.setState({
        //   currentUser: {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
     } else {
      setCurrentUser(userAuth)
     }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render(){
  return (
    <div>
      {/* <Header currentUser={this.state.currentUser}/> */}
      <Header />
      <Switch>
        <Route exact path='/' component={ HomePage }/>
        <Route  path='/shop' component={ShopPage }/>
        <Route exact path='/signin' render={() => this.props.currentUser ? ( 
          <Redirect to ='/' />  ):
           ( < SignInAndSignUpPage />
           )}
           />
      </Switch>
    </div>
    );
  }
    
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
