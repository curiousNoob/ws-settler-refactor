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

import ActionBtnContainer from '../containers/ActionBtnContainer'


class TeamTbody extends Component {
    render() {
        const {
            batsmanEl,
            isShowAction,
            isSettled,
            isVoided,
            showBatsmanAction,
            hideBatsmanAction,
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
                        value={""}
                        onChange={e => { }}
                    />
                </td>
                <td>{1}</td>
                <td>
                    <ActionBtnContainer
                        isSettled={isSettled}
                        isVoided={isVoided}

                        showAction={showBatsmanAction}
                        hideAction={hideBatsmanAction}

                        status={batsmanEl.status}
                        isShowAction={isShowAction}

                        finalValue={1}
                        finalMarketSelected={`${batsmanEl.batsman} from ${batsmanEl.team}`}
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


export default TeamTbody


