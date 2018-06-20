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

import AwayTeamTableContainer from '../containers/AwayTeamTableContainer'
import BatsmanAwayModalContainer from '../containers/BatsmanAwayModalContainer'


class HomeTeam extends Component {    

    render() {          

        return (
            <div>
                <TableNavigation activeKey="3" />
                <AwayTeamTableContainer />

                <BatsmanAwayModalContainer />
            </div>
        )
    }
}

export default HomeTeam

