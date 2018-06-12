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

import BatsmenRow from './BatsmenRow'


class TeamTbody extends Component {

    render() {
        const {
            batsmenArr,

            isShowActionArr,
            showBatsmanAction,
            hideBatsmanAction,

            isSettledArr,
            isVoidedArr,
            
            finalRunsArr,
            handleBatsmanRunsChange,
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

                    finalValue={finalRunsArr[index]}

                    batsmanIndex={index}
                    handleBatsmanRunsChange={handleBatsmanRunsChange}
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

TeamTbody.propTypes = {
    batsmenArr:  PropTypes.arrayOf(
        PropTypes.shape({
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
        })  
    ),

    isShowActionArr: PropTypes.arrayOf(PropTypes.bool),
    showBatsmanAction: PropTypes.func,
    hideBatsmanAction: PropTypes.func,

    isSettledArr: PropTypes.arrayOf(PropTypes.bool),
    isVoidedArr: PropTypes.arrayOf(PropTypes.bool),
    
    finalRunsArr: PropTypes.arrayOf(PropTypes.number),
    handleBatsmanRunsChange: PropTypes.func,
}


export default TeamTbody