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


class SettleBtn extends Component {
    constructor(){
        super()

        this.state={
            isVoided:false,
            isSettled:false,
            toShowActions:false,
        }

        this.hideActionBtns=this.hideActionBtns.bind(this)
        this.showActionBtns=this.showActionBtns.bind(this)
    }

    hideActionBtns(){
        this.setState({
            toShowActions:false,
        })
    }

    showActionBtns(){
        this.setState({
            toShowActions:true,
        })
    }

    render() {
        const {
            isSettled,
            isVoided,
            status,
            finalNumRuns,
            playerName,
        } = this.props

        const badgeSignal = {
            "inactive": "..",
            "active": "V",
            "ready_to_settle": "S/V",
            "settled": "-"
        }

        let settleVoidBtn;
        

        if (isVoided) {
            settleVoidBtn = <Button bsStyle="info">Void</Button>
        } else if (isSettled) {
            settleVoidBtn = <Button bsStyle="success">Settle</Button>
        } else {
            settleVoidBtn = (
                <div style={{ position: "relative" }} className="btn-action" onMouseLeave={this.hideActionBtns}>
                    <Button
                        bsStyle="danger"
                        onMouseEnter={this.showActionBtns}
                    >
                        Action{' '}
                        <span className="badge">
                            {
                                badgeSignal[status]
                            }
                        </span>
                    </Button>
                    {
                        this.state.toShowActions && (
                            <div style={{ position: "absolute", zIndex: 999, top: 0 }}>
                                {
                                    status === "ready_to_settle" &&
                                    <Button
                                        bsStyle="success"
                                        onClick={() => { this.props.onSettleChange("settle", finalNumRuns, playerName) }}
                                    >Settle</Button>
                                }
                                {' '}
                                {
                                    (status === "active" || status === "ready_to_settle") &&
                                    <Button
                                        bsStyle="info"
                                        onClick={() => this.props.onSettleChange("void",finalNumRuns, playerName)}
                                        style={status === "active" ? { width: "101px" } : {}}
                                    >Void</Button>
                                }
                            </div>
                        )
                    }
                </div>
            )
        }

        return (
            <React.Fragment>
                {settleVoidBtn}
            </React.Fragment>
        )
    }
}


export default SettleBtn