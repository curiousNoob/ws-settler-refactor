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
import PropTypes from "prop-types"


class FancyMarketsRow extends Component {

    render() {
        const {
                marketType,
                team,
                status,
                runs,
                finalMarketValue,
                onFancyMarketChange,
                settleVoidBtn,
        } = this.props            

        const labelStyleObj = {
            "inactive": "info",
            "active": "danger",
            "ready_to_settle": "warning",
            "settled": "success"
        }       

        return (
            <tr>
                <td>{marketType}</td>
                <td>{team ? team : "-"}</td>
                <td>
                    <h3>
                        <Label bsStyle={labelStyleObj[status]}>{status} </Label>
                    </h3>
                </td>
                <td>{runs ? runs : "-"}</td>
                <td>
                    <input type="number" step="1" value={finalMarketValue} onChange={onFancyMarketChange} />
                </td>
                <td>{finalMarketValue}</td>
                <td>
                    
                    {settleVoidBtn}
                </td>
                <td>
                    <button className="btn btn-primary">Undo</button>
                </td>
                <td>settled</td>
            </tr> 
        )
    }
}

FancyMarketsRow.propTypes = {
    marketType: PropTypes.string,
    team: PropTypes.string,
    status: PropTypes.oneOf([
        "inactive", 
        "active", 
        "ready_to_settle", 
        "settled"
    ]).isRequired,
    runs: PropTypes.number,
    finalMarketValue: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    onFancyMarketChange: PropTypes.func,
    settleVoidBtn: PropTypes.element,
}


export default FancyMarketsRow