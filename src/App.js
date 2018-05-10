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
import SettleTableContainer from './containers/SettleTableContainer'
import WebSocketConnection from './components/WebSocketConnection'

import TeamA from './pages/TeamA'
import TeamB from './pages/TeamB' 

//uncomment this for PRODUCTION
export const root_url = isProduction?window.location.pathname:""


class App extends Component { 

  componentDidMount() {
    this.props.checkCookies()
  }
 
  render() {
    
    const router = (
      <Router>
        <Switch>
          <Route exact
            path={isProduction?root_url:"/"}
            component={SettleTableContainer}
          />
          <Route path={isProduction?(root_url + "/teamA"):"/teamA"} component={TeamA} />
          <Route path={isProduction?(root_url + "/teamB"):"/teamB"} component={TeamB} />
        </Switch>
      </Router>
    )

    const loginRequestDiv = (
      <div className="container">
        Please login.
      </div>
    )

    return (
       
        <div>
          <NavBarContainer />
          {this.props.isLoggedIn ? router : loginRequestDiv}
        </div>
    );
  }
}


export default App;
