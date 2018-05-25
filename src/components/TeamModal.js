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
import { isProduction } from '../constants';


class TeamModal extends Component {
    constructor() {
        super()

        this.settleVoid = this.settleVoid.bind(this)
    }

    settleVoid() {
        const {
            isActionSettle,
            isActionVoid,
            finalNumRuns,
            marketType,
            playerName,
            teamName,
            ws,
            onHide,
        } = this.props


        if (isActionSettle) {
            if (ws.readyState === ws.OPEN) {
                if (!finalNumRuns) {
                    return
                }
                ws.send(JSON.stringify(
                    { 
                        "market": marketType, 
                        "team":teamName,
                        "batsman":playerName,
                        "settle": finalNumRuns }))
                // this.setState({
                //     isMatchOddsSettled: true,
                // })
            }
        }

        onHide()
    }


    render() {
        const {
            isActionSettle,
            isActionVoid,
            toShowModal,
            finalNumRuns,
            marketType,
            onHide,
        } = this.props

        return (
            <Modal bsSize="small" show={toShowModal} onHide={onHide}>
                <Modal.Body>
                    {isActionSettle ? `Settle ${marketType} @ ` + finalNumRuns : (isActionVoid ? `Void ${marketType}` : "none")}
                </Modal.Body>

                <Modal.Footer>
                    <Button bsStyle="success" onClick={this.settleVoid}>Yes</Button>
                    <Button bsStyle="danger" onClick={onHide}>No</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}


export default TeamModal