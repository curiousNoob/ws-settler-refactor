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
import SettleThead from '../components/SettleThead'
import TeamTable from '../components/TeamTable'
import { isProduction } from '../constants'

import TeamModal from '../components/TeamModal'


class TeamB extends Component {
    constructor() {
        super()

        this.state = {
            isActionSettle: false,
            isActionVoid: false,
            toShowModal: false,
            finalNumRuns: 0,
            playerName:"",
            isSettledArr:[], //(new Array(this.props.batsmenPlayersList.length).fill(false)),
            isVoidedArr:[], //(new Array(this.props.batsmenPlayersList.length).fill(false)),
            batsmen: [
                {
                    teamName: "Team A",
                    batsmenPlayersList: [
                        {
                            playerName: "A",
                            status: "ready_to_settle",
                            runs: 1,
                        },
                        {
                            playerName: "B",
                            status: "active",
                            runs: 1,
                        },
                        {
                            playerName: "C",
                            status: "active",
                            runs: 0,
                        },
                    ],
                },
                {
                    teamName: "Team B",
                    batsmenPlayersList: [
                        {
                            playerName: "D",
                            status: "active",
                            runs: 1,
                        },
                        {
                            playerName: "E",
                            status: "active",
                            runs: 1,
                        },
                        {
                            playerName: "F",
                            status: "active",
                            runs: 0,
                        },
                    ],
                }
            ]
        }

        this.handleSettleChange = this.handleSettleChange.bind(this)
        this.handleHide = this.handleHide.bind(this)
    }

    componentDidMount() {
        if (!("WebSocket" in window)) {
            alert("This browser does not support WebSockets");
        }


        const self = this
        let uri;
        //uncomment this for PRODUCTION
        if (isProduction) {
            const host = window.location.host;
            const path = "/api/settler/ws";
            console.log("PROTOCOL", window.location.protocol)
            if (window.location.protocol === "https:") {
                uri = "wss://" + host + path;
            } else {
                uri = "ws://" + host + path;
            }
        } else {
            uri = "wss://cct-stage.iosport.co.uk/api/settler/ws"
        }

        this.ws = new WebSocket(uri);
        this.ws.onopen = function () {
            console.log('Connected');
        };
        this.ws.onclose = function (e) {
            console.log('Connection closed', e.reason);
        };
        this.ws.onerror = function (e) {
            console.log("WS error", e);
        }

        let once=false
        
        this.ws.onmessage = function (evt) {
            var response = JSON.parse(evt.data);
            console.log("Received: ", (response));

            self.setState(
                response,                
            );
            
            if(!once){
                self.setState({
                    isSettledArr:(new Array(response.batsmen[0].batsmenPlayersList.length).fill(false)),
                    isVoidedArr:(new Array(response.batsmen[0].batsmenPlayersList.length).fill(false)),
                })
                once=true
            }

        }
    }

    handleSettleChange(actionType, finalNumRuns, playerName) {
        console.log("handleSettleChange", actionType)

        switch (actionType) {
            case "settle":
                console.log("this settle")
                this.setState({
                    toShowModal: true,
                    isActionSettle: true,
                    finalNumRuns,
                    playerName,
                })
                break
            case "void":
                this.setState({
                    toShowModal: true,
                    isActionVoid: true,
                    playerName,
                })
                break
            default:
                break
        }
    }

    handleHide() {
        this.setState({
            toShowModal: false,
            isActionSettle: false,
            isActionVoid: false,
        })
    }

    render() {
        const {
            batsmen,
            isActionSettle,
            isActionVoid,
            finalNumRuns,
            playerName,
        } = this.state


        return (
            <div>
                <TableNavigation activeKey="2" />
                {
                    batsmen[1].batsmenPlayersList.length>0 
                    
                    &&

                    <TeamTable
                        batsmenPlayersList={batsmen[1].batsmenPlayersList}
                        onSettleChange={this.handleSettleChange}
                    />
                }
                <TeamModal
                    isActionSettle={isActionSettle}
                    isActionVoid={isActionVoid}
                    toShowModal={this.state.toShowModal}
                    finalNumRuns={finalNumRuns}
                    marketType={"batsmen"}
                    teamName={batsmen[0].teamName}
                    playerName={playerName}
                    onHide={this.handleHide}
                    ws={this.ws}
                />
            </div>
        );
    }
}

export default TeamB

