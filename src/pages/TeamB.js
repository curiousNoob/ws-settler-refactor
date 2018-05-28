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

import TableNavigation from '../components/TableNavigation'
import SettleThead from '../components/SettleThead'
import { isProduction } from '../constants'

import TeamModal from '../components/TeamModal'


import AwayTeamTableContainer from '../containers/AwayTeamTableContainer'
import SettleModalContainer from '../containers/SettleModalContainer'


class TeamA extends Component {    

    render() {          

        return (
            <div>
                <TableNavigation activeKey="3" />
                <AwayTeamTableContainer />

                <SettleModalContainer />
            </div>
        )
    }
}

export default TeamA

