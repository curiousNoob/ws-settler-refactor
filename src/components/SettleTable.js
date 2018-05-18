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

import SettleThead from './SettleThead'
import TableNavigation from './TableNavigation'
import SettleModalContainer from '../containers/SettleModalContainer'

import SettleTbodyContainer from '../containers/SettleTbodyContainer'

import { isProduction } from '../constants'


class SettleTable extends Component {
  render() { 
    
    return (      
        <table className="table table-bordered table-condensed">
          <SettleThead />
          <SettleTbodyContainer />
        </table>
    );
  }
}


export default SettleTable