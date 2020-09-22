import React, { useState, useEffect } from 'react';
import './App.css';
import Nav from "./components/Nav"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';
import ProfileInfo from './components/ProfileData.js/ProfileInfo';
import FoodTotal from './components/FoodTotal';
import TodoTotal from "./components/TodoTotal"
import FoodInfo from "./components/FoodInfo"



function App() {


  return (
    <Router>
      <div>
        <Nav />
        <header>
          <h1>Practice Tracker <i class="fas fa-fire-alt fa-1x"></i></h1>
        </header>
        <Route path="/" exact component={Home} />
        <Route path="/profileinfo" component={ProfileInfo} />
        <Route path="/TodoTotal" component={TodoTotal} />
        <Route path="/Foodtotal" component={FoodTotal} />
        <Route path="/FoodInfo" component={FoodInfo} />
        <br />
        <br />
      </div >
    </Router>
  );
}

const Home = () => (
  <div>
    <Link to="TodoTotal" className="main_links">
      <li><i class="fas fa-running fa-3x"></i>Practices</li>
    </Link>
    <br />
    <br />
    <br />
    <Link to="Foodtotal" className="main_links">
      <li><i class="fas fa-utensils fa-3x"></i>   Food</li>
    </Link>
    <br />
    <br />
    <br />
    <Link to="FoodInfo" className="main_links">
      <li> <i class="fas fa-hamburger fa-3x"></i>  Food Values</li>
    </Link>
  </div>
)

export default App;
