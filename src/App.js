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
import SettleTable from './components/SettleTable'
import WebSocketConnection from './components/WebSocketConnection'

import TeamA from './pages/TeamA'
import TeamB from './pages/TeamB' 

//uncomment this for PRODUCTION
export const root_url = isProduction?window.location.pathname:""


class App extends Component {
  constructor() {
    super()

    this.state = {      
      home: "",
      away: "",
    }

    
    this.setMatchNames=this.setMatchNames.bind(this)
  }

  componentDidMount() {
    this.props.checkCookies()
  }

  // componentDidUpdate(){
  //   console.log("APP componentDidUpdate")
  // }

  setMatchNames(home, away){
    this.setState({
      home,
      away,
    })
  }

  render() {
    
    const router = (
      <Router>
        <Switch>
          <Route exact
            path={isProduction?root_url:"/"}
            render={() => (
              <SettleTable
                isLoggedIn={this.props.isLoggedIn}
                setMatchNames={this.setMatchNames}
              />
            )}
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
          <NavBarContainer {...this.state}  />
          {this.props.isLoggedIn ? router : loginRequestDiv}
        </div>
    );
  }
}


export default App;
