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

import SettleBtn from './SettleBtn'


class TeamTbody extends Component {
    constructor(props){
        super(props)

        this.state={
            finalPlayerRuns:this.props.batsmenPlayersList.map(batsmenPlayer=>{
                return (batsmenPlayer.runs)
            }),
            
        }

        this.handleFinalPlayerRuns=this.handleFinalPlayerRuns.bind(this)
    }

    handleFinalPlayerRuns(e, i){
        const val = e.target.value

        if(val<0){
            return
        }

        const finalPlayerRuns=this.state.finalPlayerRuns.slice()

        finalPlayerRuns[i]=val

        this.setState({
            finalPlayerRuns,
        })
        
    }

    render() {
        const { 
            finalPlayerRuns,
            
        } = this.state

        const { 
            batsmenPlayersList,
            isSettledArr,
            isVoidedArr,
            onSettleChange,            
        } = this.props

        const labelStyleObj = {
            "inactive": "info",
            "active": "danger",
            "ready_to_settle": "warning",
            "settled": "success"
        }

        const batsmenPlayersRowsList = batsmenPlayersList.map((batsmenPlayer, i)=>{
            return (
                <tr key={batsmenPlayer.playerName}>
                    <td>{batsmenPlayer.playerName}</td>
                    <td>
                        <h3>
                            <Label bsStyle={labelStyleObj[batsmenPlayer.status]}>{batsmenPlayer.status} </Label>
                        </h3>
                    </td>
                    <td>{batsmenPlayer.runs ? batsmenPlayer.runs : "-"}</td>
                    <td>
                        <input 
                            type="number" 
                            step="1" 
                            value={finalPlayerRuns[i]} 
                            onChange={(e)=>this.handleFinalPlayerRuns(e, i)} 
                        />
                    </td>
                    <td>{finalPlayerRuns[i]}</td>
                    <td>                        
                        <SettleBtn 
                            isSettled={isSettledArr[i]} 
                            isVoided={isVoidedArr[i]}
                            status={batsmenPlayer.status}
                            finalNumRuns={finalPlayerRuns[i]}
                            playerName={batsmenPlayer.playerName}
                            onSettleChange={onSettleChange}
                        />
                    </td>
                    <td>
                        <button className="btn btn-primary">Undo</button>
                    </td>
                    <td>settled</td>
                </tr>
            )
        })

        return (
            <tbody>
                {batsmenPlayersRowsList}
            </tbody>
        )
    }
}


export default TeamTbody