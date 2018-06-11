import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import { Switch } from "react-router";
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
import PropTypes from "prop-types"

//uncomment this for PRODUCTION
import { isProduction } from '../constants'

import { root_url } from './ConnectedApp'

class TableNavigation extends Component {
  render() {

    return (
      <Nav bsStyle="tabs" activeKey={this.props.activeKey}>
        <LinkContainer exact to={isProduction?root_url:"/"} >
          <NavItem eventKey="1">
            Runs
          </NavItem>
        </LinkContainer>
        <LinkContainer exact to={isProduction?(root_url+"/teamA"):"/teamA"} >
          <NavItem eventKey="2">
            Home
          </NavItem>
        </LinkContainer>
        <LinkContainer exact to={isProduction?(root_url+"/teamB"):"/teamB"} >
          <NavItem eventKey="3">
            Away
          </NavItem>
        </LinkContainer>
      </Nav>
    );
  }
}

TableNavigation.propTypes = {
  activeKey: PropTypes.string.isRequired,
}


export default TableNavigation