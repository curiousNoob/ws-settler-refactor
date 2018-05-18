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
import SettleTable from '../components/SettleTable'

import SettleModalContainer from '../containers/SettleModalContainer'
import WebSocketConnectionContainer from '../containers/WebSocketConnectionContainer'

import { isProduction } from '../constants'


class MarketRuns extends Component{
    render(){
        return (
            <WebSocketConnectionContainer>
                <TableNavigation activeKey="1" />
                <SettleTable />
                
                <SettleModalContainer /> 
            </WebSocketConnectionContainer>
        )
    }
}


export default MarketRuns