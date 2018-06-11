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
import PropTypes from "prop-types";


class SettleThead extends Component {
    render() {

        const { haveMarket } = this.props

        const theadNamesArr = [
            "Selection",
            "Status",
            "Value",
            "Manual",
            "Final",
            "Settle/Void",
            "Undo",
            "CBstatus",      
        ]

        haveMarket && theadNamesArr.unshift("Market")

        const theadNamesList = theadNamesArr.map(theadName=>(
            <th key={theadName}>
                {theadName}
            </th>
        ))

        return (
            <thead>
                <tr>
                    {theadNamesList}
                </tr>
            </thead>
        )
    }
}

//if props not provided in parent component, show "market" table heading
SettleThead.defaultProps = {
    haveMarket: true,
}

SettleThead.propTypes = {
    haveMarket: PropTypes.bool,
}



export default SettleThead