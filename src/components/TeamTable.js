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

import TeamTbody from './TeamTbody'
import SettleThead from './SettleThead'

import TableNavigation from './TableNavigation'

import { isProduction } from '../constants'


class TeamTable extends Component {
  render() {
    const {
      batsmenArr,
      isShowActionArr,
      isSettledArr,
      isVoidedArr,
      showBatsmanAction,
      hideBatsmanAction,
    } = this.props

    return (
      <Table striped bordered condensed hover>
        <SettleThead haveMarket={false} />
        <TeamTbody
          batsmenArr={batsmenArr}
          isShowActionArr={isShowActionArr}
          isSettledArr={isSettledArr}
          isVoidedArr={isVoidedArr}
          showBatsmanAction={showBatsmanAction}
          hideBatsmanAction={hideBatsmanAction}
        />
      </Table>
    )
  }
}


export default TeamTable