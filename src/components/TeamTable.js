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
import PropTypes from "prop-types"

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

      finalRunsArr,
      handleBatsmanRunsChange,
    } = this.props

    return (
      <Table bordered condensed hover>
        <SettleThead haveMarket={false} />
        <TeamTbody
          batsmenArr={batsmenArr}

          isShowActionArr={isShowActionArr}

          showBatsmanAction={showBatsmanAction}
          hideBatsmanAction={hideBatsmanAction}

          isSettledArr={isSettledArr}
          isVoidedArr={isVoidedArr}
         
          finalRunsArr={finalRunsArr}

          handleBatsmanRunsChange={handleBatsmanRunsChange}
        />
      </Table>
    )
  }
}

TeamTable.propTypes = {
  batsmenArr:  PropTypes.arrayOf(
        PropTypes.shape({
            batsman: PropTypes.string,
            innings: PropTypes.oneOf([1, 2]),
            lineup_id: PropTypes.number,
            runs: PropTypes.number,
            status: PropTypes.oneOf([
                "inactive", 
                "active", 
                "ready_to_settle", 
                "settled"
            ]).isRequired,
            team: PropTypes.string,
        })  
    ),

  isShowActionArr: PropTypes.arrayOf(PropTypes.bool),

  isSettledArr: PropTypes.arrayOf(PropTypes.bool),
  isVoidedArr: PropTypes.arrayOf(PropTypes.bool),

  showBatsmanAction: PropTypes.func,
  hideBatsmanAction: PropTypes.func,

  finalRunsArr: PropTypes.arrayOf(PropTypes.number),
  handleBatsmanRunsChange: PropTypes.func,
}


export default TeamTable