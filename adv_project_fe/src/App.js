import React from 'react';
import { Route } from "react-router-dom";

import Login from './components/Login.js';
import PrivateRoute  from "./components/PrivateRoute.js";
import Rooms from './components/Rooms.js';

import './App.css';

function App() {
  return (
    <>
      <Route exact path="/" component={Login} />
      <PrivateRoute path="/rooms" component={Rooms}/>
    </>
  );
}

export default App;
