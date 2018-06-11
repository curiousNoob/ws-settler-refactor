import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import { Switch } from "react-router";
import PropTypes from 'prop-types';

import {
  Nav,
  NavItem,
  Navbar,
  FormGroup,
  FormControl,
  Button,
  ControlLabel,
  Modal,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import axios from 'axios';
import Cookies from "js-cookie";

import { cookieName } from './constants'
import { isProduction } from './constants'

import NavBarContainer from './containers/NavBarContainer'
import TableNavigation from './components/TableNavigation'

import HomeTeam from './pages/HomeTeam'
import AwayTeam from './pages/AwayTeam' 
import MarketRuns from './pages/MarketRuns' 

import ConnectedApp from './components/ConnectedApp'


class App extends Component { 

  componentDidMount() {
    this.props.checkCookies()
  }
 
  render() {  
    const loginRequestDiv = (
      <div className="container">
        Please login.
      </div>
    )

    return (       
        <div>
          <NavBarContainer />
          {this.props.isLoggedIn ? <ConnectedApp /> : loginRequestDiv}          
        </div>
    );
  }
}


export default App;
