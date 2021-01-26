
import { useEffect, useState } from 'react';

import { getUser, logout } from './services/userService';

import { getCountries } from './services/countries-api';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Home from './pages/Home/Home';
import Countries from './pages/Countries/Countries';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import DetailPage from './pages/DetailPage/DetailPage';

import {Switch, Route, withRouter, Redirect } from 'react-router-dom';

import './App.css';


function App(props) {

  const [ userState, setUserState ] = useState({
    user: getUser()
  });
  const [ appState, setAppState ] = useState({
    data: []
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

  async function getAppData() {
    const data = await getCountries();
    console.log(data);
    setAppState({data});
  }

  useEffect(() => {
    getAppData();
    console.log('effect');
  }, []);

  function findOne(countrycode) {
    return appState.data.find(code => code.alpha3Code === countrycode);
    
  }

  function findRandom(data) {
    const rand =  appState.data[Math.floor(Math.random() * appState.data.length)];
    return rand;

  }

  

  return (
    <div className="App">
     <Header handleLogout={handleLogout} user={userState.user} />
     <main>
      <Switch>

        <Route exact path='/' render={props => {
                const rand=
                findRandom(appState.data)
                if(!rand) {
                  return (
                    <div>
                      <h1>...loading</h1>
                    </div>
                  )
                } else {
                  return (
                <Home 
                    {...props}
                    rand = {rand}
                />
                )
              }
            } 
                } />    

        <Route exact path='/countries' render={props => 
        userState.user ?
        
         appState.data.map((data, idx) =>
          <Countries key={idx} data={data}/>
          )
        
          :
          <Redirect to='/login' />
          } />
        <Route exact path='/signup' render={props => 
          <Signup {...props} handleSignupOrLogin={handleSignupOrLogin}/>
          } />
        <Route exact path='/login' render={props => 
          <Login {...props}  handleSignupOrLogin={handleSignupOrLogin}/>
          } />

        <Route exact path='/countries/:alpha3Code' render={props =>  {
                const country=
                findOne(props.match.params.alpha3Code)
            if(!country) {
              return (
                <div>
                  <h1>...loading</h1>
                </div>
              )
            } else {
              return (
            <DetailPage 
                {...props}
                country = {country}
             />
            )
          }
        }
      } />

      </Switch>
     </main>
     <Footer />
    </div>
  );
}

export default withRouter(App);
