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

import { cookieName, isProduction } from '../constants'

import NavBarContainer from '../containers/NavBarContainer'
import TableNavigation from './TableNavigation'

import HomeTeam from '../pages/HomeTeam'
import AwayTeam from '../pages/AwayTeam' 
import MarketRuns from '../pages/MarketRuns' 

import WebSocketConnectionContainer from '../containers/WebSocketConnectionContainer'

//uncomment this for PRODUCTION
export const root_url = isProduction?window.location.pathname:""


class ConnectedApp extends Component{
  render(){
    return (
      <WebSocketConnectionContainer>
        <Router>
          <Switch>
            <Route exact
              path={isProduction?root_url:"/"}
              component={MarketRuns}
            />
            <Route path={isProduction?(root_url + "/teamA"):"/teamA"} component={HomeTeam} />
            <Route path={isProduction?(root_url + "/teamB"):"/teamB"} component={AwayTeam} />
          </Switch>
        </Router>
      </WebSocketConnectionContainer>
    )
  }
}

export default ConnectedApp