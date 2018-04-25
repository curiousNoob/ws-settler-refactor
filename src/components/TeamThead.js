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


class TeamThead extends Component {
    render() {
        return (
            <thead>
                <tr>
                    <th>Selection</th>
                    <th>Status</th>
                    <th>Value</th>
                    <th>Manual</th>
                    <th>Final</th>
                    <th>Settle/Void</th>
                    <th>Undo</th>
                    <th>CBstatus</th>
                </tr>
            </thead>
        )
    }
}


export default TeamThead