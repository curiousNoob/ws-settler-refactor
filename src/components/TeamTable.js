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
  Table,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import axios from 'axios';
import Cookies from "js-cookie";

import TeamThead from './TeamThead'
import TeamTbody from './TeamTbody'

import TableNavigation from './TableNavigation'

import { isProduction } from '../constants'


class TeamTable extends Component {  
  render() {
    const { 
      batsmenPlayersList,
      isSettledArr,
      isVoidedArr,
      onSettleChange, 
    } = this.props

    return (
        <Table striped bordered condensed hover>
            <TeamThead />
            <TeamTbody 
              batsmenPlayersList={batsmenPlayersList} 
              isSettledArr={isSettledArr}
              isVoidedArr={isVoidedArr}
              onSettleChange={onSettleChange}              
            />
        </Table>
    )
  }
}


export default TeamTable