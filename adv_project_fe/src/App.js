import React from 'react';
import { Route } from "react-router-dom";

import PrivateRoute  from "./components/PrivateRoute.js";
import SignUp from './components/SignUp';
import Login from './components/Login';
import Rooms from './components/Rooms';
import LandingPage from './components/LandingPage';
import About from './components/About';

import './App.css';

function App() {
  return (
    <>
      <LandingPage />
      <Route exact path="/about" component={About} />
      <Route exact path="/" component={SignUp} />
      <Route path='/login' component={Login} />
      <PrivateRoute path="/rooms" component={Rooms}/>
    </>
  );
}

export default App;
