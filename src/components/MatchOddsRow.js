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
    Label,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import axios from 'axios';
import Cookies from "js-cookie";
import PropTypes from "prop-types";


class MatchOddsRow extends Component {

    render() {
        const {
            status,
            winner,
            onMatchoddsChange,
            home,
            away,
            finalMo,
            settleVoidMatchoddsBtn,
        } = this.props            

        const labelStyleObj = {
            "inactive": "info",
            "active": "danger",
            "ready_to_settle": "warning",
            "settled": "success"
        }       

        return (
            <tr>
                <td>Matchodds</td>
                <td>N/A</td>
                <td>
                    <h3>
                        <Label bsStyle={labelStyleObj[status]}>{status}</Label>
                    </h3>

                </td>
                <td>{winner ? winner : "-"}</td>
                <td>
                    <select name="" id="" defaultValue="outcome" onChange={onMatchoddsChange}>
                        <option value="outcome" hidden>Choose outcome</option>
                        <option value="Draw">Draw</option>
                        <option value={home}>{home}</option>
                        <option value={away}>{away}</option>
                    </select>
                </td>
                <td>{finalMo}</td>
                <td>                    
                    {settleVoidMatchoddsBtn}
                </td>
                <td>
                    <button className="btn btn-primary">Undo</button>
                </td>
                <td>
                    active*
                </td>
            </tr>   
        )
    }
}

MatchOddsRow.propTypes = {
    status: PropTypes.oneOf([
        "inactive", 
        "active", 
        "ready_to_settle", 
        "settled"
    ]).isRequired,
    winner: PropTypes.string,
    onMatchoddsChange: PropTypes.func,
    home:PropTypes.string,
    away:PropTypes.string,
    finalMo: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),

    settleVoidMatchoddsBtn: PropTypes.element,
}


export default MatchOddsRow