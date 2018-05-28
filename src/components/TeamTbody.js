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

import BatsmenRow from './BatsmenRow'


class TeamTbody extends Component {

    render() {
        const {
            batsmenArr,
            isShowActionArr,
            isSettledArr,
            isVoidedArr,
            showBatsmanAction,
            hideBatsmanAction,
        } = this.props

        const batsmenRowsList = batsmenArr.map((batsmanEl, index) => {
            return (
                <BatsmenRow
                    key={batsmanEl.lineup_id}

                    batsmanEl={batsmanEl}

                    isShowAction={isShowActionArr[index]}

                    isSettled={isSettledArr[index]}
                    isVoided={isVoidedArr[index]}

                    showBatsmanAction={()=>showBatsmanAction(index)}
                    hideBatsmanAction={()=>hideBatsmanAction(index)}
                />
            )
        })

        return (
            <tbody>
                {batsmenRowsList}
            </tbody>
        )
    }
}


export default TeamTbody