
import { useState } from 'react';

import { getUser, logout } from './services/userService';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Home from './pages/Home/Home';
import Dashboard from './pages/Dashboard/Dashboard';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';

import {Switch, Route, withRouter, Redirect } from 'react-router-dom';

import './App.css';

// create 2 components inside of components dir
// Header component and Footer component - these will be in separate folders
// have them return header or footer element respectively with the text
// fragment of header or footer
// export them and then import them into app.js
// render them in the outer div below

// create 4 page components- login, signup dashboard and home
// define as function component and export them
// have them return a div with text content of the name
// import them into app.js
// import  switch and route from react router
// define the routes for the various pages 

function App(props) {

  const [ userState, setUserState ] = useState({
    user: getUser()
  });

  function handleSignupOrLogin() {
    setUserState({
      user: getUser()
    });
  }

  function handleLogout() {
    logout();

    setUserState({user: null});
    props.history.push('/');
  }

  return (
    <div className="App">
     <Header handleLogout={handleLogout} user={userState.user} />
     <main>
      <Switch>
        <Route exact path='/' render={props => 
          <Home />
          } />
        <Route exact path='/dashboard' render={props => 
        userState.user ?
          <Dashboard />
          :
          <Redirect to='/login' />
          } />
        <Route exact path='/signup' render={props => 
          <Signup {...props} handleSignupOrLogin={handleSignupOrLogin}/>
          } />
        <Route exact path='/login' render={props => 
          <Login {...props}  handleSignupOrLogin={handleSignupOrLogin}/>
          } />
      </Switch>
     </main>
     <Footer />
    </div>
  );
}

export default withRouter(App);
