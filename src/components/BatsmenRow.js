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

import ActionBtnContainer from '../containers/ActionBtnContainer'


class BatsmenRow extends Component {
    render() {
        const {
            batsmanEl,

            isShowAction,

            showBatsmanAction,
            hideBatsmanAction,

            isSettled,
            isVoided,            
            
            finalValue,
            
            handleBatsmanRunsChange,
            batsmanIndex,
        } = this.props

        const labelStyleObj = {
            "inactive": "info",
            "active": "danger",
            "ready_to_settle": "warning",
            "settled": "success"
        }

        return (
            <tr>
                <td>{batsmanEl.batsman}</td>
                <td>
                    <h3>
                        <Label bsStyle={labelStyleObj[batsmanEl.status]}>{batsmanEl.status} </Label>
                    </h3>
                </td>
                <td>{batsmanEl.runs ? batsmanEl.runs : "-"}</td>
                <td>
                    <input
                        type="number"
                        step="1"
                        value={finalValue}
                        onChange={(e)=>handleBatsmanRunsChange(e, batsmanIndex)}
                    />
                </td>
                <td>{finalValue}</td>
                <td>
                    <ActionBtnContainer
                        isSettled={isSettled}
                        isVoided={isVoided}

                        showAction={showBatsmanAction}
                        hideAction={hideBatsmanAction}

                        status={batsmanEl.status}
                        isShowAction={isShowAction}

                        finalValue={finalValue}
                        finalMarketSelected={batsmanIndex}
                    />
                </td>
                <td>
                    <button className="btn btn-primary">Undo</button>
                </td>
                <td>settled</td>
            </tr>
        )
    }
}

BatsmenRow.propTypes={
    batsmanEl: PropTypes.shape({
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
    }),

    isShowAction: PropTypes.bool,

    showBatsmanAction: PropTypes.func,
    hideBatsmanAction: PropTypes.func,

    isSettled: PropTypes.bool,
    isVoided: PropTypes.bool,            

    finalValue: PropTypes.number,

    handleBatsmanRunsChange: PropTypes.func,
    batsmanIndex: PropTypes.number,
}

export default BatsmenRow


