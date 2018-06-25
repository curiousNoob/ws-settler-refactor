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

import MatchOddsRow from './MatchOddsRow'
import FancyMarketsRow from './FancyMarketsRow'

import ActionBtnContainer from '../containers/ActionBtnContainer'


class SettleTbody extends Component {

    render() {
        const {
            mo,
            ir_lambi,
            ir_fancy_1_6,
            ir_fancy_1_10,
            ir_fancy_1_12,
            ir_fancy_1_15,
            ir_fancy_2_6,
            ir_fancy_2_10,
            ir_fancy_2_12,
            ir_fancy_2_15,

            finalMo,
            finalLambi,
            final_ir_fancy_1_6,            
            final_ir_fancy_1_10,            
            final_ir_fancy_1_12,            
            final_ir_fancy_1_15,            
            final_ir_fancy_2_6,            
            final_ir_fancy_2_10,            
            final_ir_fancy_2_12,
            final_ir_fancy_2_15,
            
            home,
            away,
            
            isMatchOddsVoided,
            isMatchOddsSettled,
            isLambiVoided,
            isLambiSettled,

            isFancy_1_6_Settled,
            isFancy_1_6_Voided,
            isFancy_1_10_Settled,
            isFancy_1_10_Voided,
            isFancy_1_12_Settled,
            isFancy_1_12_Voided,
            isFancy_1_15_Settled,
            isFancy_1_15_Voided,             
            isFancy_2_6_Settled,
            isFancy_2_6_Voided,
            isFancy_2_10_Settled,
            isFancy_2_10_Voided,
            isFancy_2_12_Settled,
            isFancy_2_12_Voided,
            isFancy_2_15_Settled,
            isFancy_2_15_Voided,

            isShowActionMO,
            showMatchoddsAction,
            hideMatchoddsAction,

            isShowActionLambi,
            showLambiAction,
            hideLambiAction,

            isShowActionFancy_1_6,
            isShowActionFancy_1_10,
            isShowActionFancy_1_12,
            isShowActionFancy_1_15,
            isShowActionFancy_2_6,
            isShowActionFancy_2_10,
            isShowActionFancy_2_12,
            isShowActionFancy_2_15,
            showFancyMarketAction,
            hideFancyMarketAction,

        } = this.props


        const labelStyleObj = {
            "inactive": "info",
            "active": "danger",
            "ready_to_settle": "warning",
            "settled": "success"
        }        

        let settleVoidMatchoddsBtn 
        let settleVoidLambiBtn
        let settleVoidFancy_1_6_Btn
        let settleVoidFancy_1_10_Btn
        let settleVoidFancy_1_12_Btn
        let settleVoidFancy_1_15_Btn
        let settleVoidFancy_2_6_Btn
        let settleVoidFancy_2_10_Btn
        let settleVoidFancy_2_12_Btn
        let settleVoidFancy_2_15_Btn


        settleVoidMatchoddsBtn = <ActionBtnContainer
                                    isSettled={isMatchOddsSettled}
                                    isVoided={isMatchOddsVoided}                                    

                                    showAction={showMatchoddsAction}
                                    hideAction={hideMatchoddsAction}

                                    status={mo.status}
                                    isShowAction={isShowActionMO}

                                    finalValue={finalMo}
                                    finalMarketSelected={"matchOdds"}
                                />

        settleVoidLambiBtn = <ActionBtnContainer
                                    isSettled={isLambiSettled}                                    
                                    isVoided={isLambiVoided}                                    

                                    showAction={showLambiAction}
                                    hideAction={hideLambiAction}

                                    status={ir_lambi.status}
                                    isShowAction={isShowActionLambi}

                                    finalValue={finalLambi}
                                    finalMarketSelected={"lambi"}                                    
                            />     

        settleVoidFancy_1_6_Btn = <ActionBtnContainer 
                                    isSettled={isFancy_1_6_Settled}
                                    isVoided={isFancy_1_6_Voided}                                    

                                    showAction={()=>showFancyMarketAction("fancy_1_6")}
                                    hideAction={()=>hideFancyMarketAction("fancy_1_6")}

                                    status={ir_fancy_1_6.status}
                                    isShowAction={isShowActionFancy_1_6}

                                    finalValue={final_ir_fancy_1_6}
                                    finalMarketSelected={"ir_fancy_1_6"}                                    
                                />

        settleVoidFancy_1_10_Btn = <ActionBtnContainer 
                                    isSettled={isFancy_1_10_Settled}
                                    isVoided={isFancy_1_10_Voided}                                    

                                    showAction={()=>showFancyMarketAction("fancy_1_10")}
                                    hideAction={()=>hideFancyMarketAction("fancy_1_10")}

                                    status={ir_fancy_1_10.status}
                                    isShowAction={isShowActionFancy_1_10}

                                    finalValue={final_ir_fancy_1_10}
                                    finalMarketSelected={"ir_fancy_1_10"}                                    
                                /> 
        
        settleVoidFancy_1_12_Btn = <ActionBtnContainer 
                                    isSettled={isFancy_1_12_Settled}
                                    isVoided={isFancy_1_12_Voided}                                    

                                    showAction={()=>showFancyMarketAction("fancy_1_12")}
                                    hideAction={()=>hideFancyMarketAction("fancy_1_12")}

                                    status={ir_fancy_1_12.status}
                                    isShowAction={isShowActionFancy_1_12}

                                    finalValue={final_ir_fancy_1_12}
                                    finalMarketSelected={"ir_fancy_1_12"}                                    
                                /> 

        settleVoidFancy_1_15_Btn = <ActionBtnContainer 
                                    isSettled={isFancy_1_15_Settled}
                                    isVoided={isFancy_1_15_Voided}                                    

                                    showAction={()=>showFancyMarketAction("fancy_1_15")}
                                    hideAction={()=>hideFancyMarketAction("fancy_1_15")}

                                    status={ir_fancy_1_15.status}
                                    isShowAction={isShowActionFancy_1_15}

                                    finalValue={final_ir_fancy_1_15}
                                    finalMarketSelected={"ir_fancy_1_15"}                                    
                                /> 
        
        settleVoidFancy_2_6_Btn = <ActionBtnContainer 
                                    isSettled={isFancy_2_6_Settled}
                                    isVoided={isFancy_2_6_Voided}                                    

                                    showAction={()=>showFancyMarketAction("fancy_2_6")}
                                    hideAction={()=>hideFancyMarketAction("fancy_2_6")}

                                    status={ir_fancy_2_6.status}
                                    isShowAction={isShowActionFancy_2_6}

                                    finalValue={final_ir_fancy_2_6}
                                    finalMarketSelected={"ir_fancy_2_6"} 
                                />

        settleVoidFancy_2_10_Btn = <ActionBtnContainer 
                                    isSettled={isFancy_2_10_Settled}
                                    isVoided={isFancy_2_10_Voided}                                    

                                    showAction={()=>showFancyMarketAction("fancy_2_10")}
                                    hideAction={()=>hideFancyMarketAction("fancy_2_10")}

                                    status={ir_fancy_2_10.status}
                                    isShowAction={isShowActionFancy_2_10}

                                    finalValue={final_ir_fancy_2_10}
                                    finalMarketSelected={"ir_fancy_2_10"} 
                                />
        
        settleVoidFancy_2_12_Btn = <ActionBtnContainer 
                                    isSettled={isFancy_2_12_Settled}
                                    isVoided={isFancy_2_12_Voided}                                    

                                    showAction={()=>showFancyMarketAction("fancy_2_12")}
                                    hideAction={()=>hideFancyMarketAction("fancy_2_12")}

                                    status={ir_fancy_2_12.status}
                                    isShowAction={isShowActionFancy_2_12}

                                    finalValue={final_ir_fancy_2_12}
                                    finalMarketSelected={"ir_fancy_2_12"} 
                                />

        settleVoidFancy_2_15_Btn = <ActionBtnContainer 
                                    isSettled={isFancy_2_15_Settled}
                                    isVoided={isFancy_2_15_Voided}                                    

                                    showAction={()=>showFancyMarketAction("fancy_2_15")}
                                    hideAction={()=>hideFancyMarketAction("fancy_2_15")}

                                    status={ir_fancy_2_15.status}
                                    isShowAction={isShowActionFancy_2_15}

                                    finalValue={final_ir_fancy_2_15}
                                    finalMarketSelected={"ir_fancy_2_15"} 
                                />             

        return (
            <tbody>
                <MatchOddsRow
                    status={mo.status}
                    winner={mo.winner}
                    onMatchoddsChange={this.props.handleMatchoddsChange}
                    home={home}
                    away={away}
                    finalMo={finalMo}
                    settleVoidMatchoddsBtn={settleVoidMatchoddsBtn}
                />  

                <FancyMarketsRow
                    marketType={"Lambi"}
                    team={ir_lambi.team}
                    status={ir_lambi.status}
                    runs={ir_lambi.runs}
                    finalMarketValue={finalLambi}
                    onFancyMarketChange={this.props.handleLambiChange}
                    settleVoidBtn={settleVoidLambiBtn}
                /> 

                <FancyMarketsRow
                    marketType={`Fancy ${ir_fancy_1_6.innings} ${ir_fancy_1_6.overs}`}
                    team={ir_fancy_1_6.team}
                    status={ir_fancy_1_6.status}
                    runs={ir_fancy_1_6.runs}
                    finalMarketValue={final_ir_fancy_1_6}
                    onFancyMarketChange={e=>this.props.handleFancyMarketsChange(e, "fancy_1_6")}
                    settleVoidBtn={settleVoidFancy_1_6_Btn}
                />

                <FancyMarketsRow
                    marketType={`Fancy ${ir_fancy_1_10.innings} ${ir_fancy_1_10.overs}`}
                    team={ir_fancy_1_10.team}
                    status={ir_fancy_1_10.status}
                    runs={ir_fancy_1_10.runs}
                    finalMarketValue={final_ir_fancy_1_10}
                    onFancyMarketChange={e=>this.props.handleFancyMarketsChange(e, "fancy_1_10")}
                    settleVoidBtn={settleVoidFancy_1_10_Btn}
                /> 

                <FancyMarketsRow
                    marketType={`Fancy ${ir_fancy_1_12.innings} ${ir_fancy_1_12.overs}`}
                    team={ir_fancy_1_12.team}
                    status={ir_fancy_1_12.status}
                    runs={ir_fancy_1_12.runs}
                    finalMarketValue={final_ir_fancy_1_12}
                    onFancyMarketChange={e=>this.props.handleFancyMarketsChange(e, "fancy_1_12")}
                    settleVoidBtn={settleVoidFancy_1_12_Btn}
                />

                <FancyMarketsRow
                    marketType={`Fancy ${ir_fancy_1_15.innings} ${ir_fancy_1_15.overs}`}
                    team={ir_fancy_1_15.team}
                    status={ir_fancy_1_15.status}
                    runs={ir_fancy_1_15.runs}
                    finalMarketValue={final_ir_fancy_1_15}
                    onFancyMarketChange={e=>this.props.handleFancyMarketsChange(e, "fancy_1_15")}
                    settleVoidBtn={settleVoidFancy_1_15_Btn}
                />

                <FancyMarketsRow
                    marketType={`Fancy ${ir_fancy_2_6.innings} ${ir_fancy_2_6.overs}`}
                    team={ir_fancy_2_6.team}
                    status={ir_fancy_2_6.status}
                    runs={ir_fancy_2_6.runs}
                    finalMarketValue={final_ir_fancy_2_6}
                    onFancyMarketChange={e=>this.props.handleFancyMarketsChange(e, "fancy_2_6")}
                    settleVoidBtn={settleVoidFancy_2_6_Btn}
                />

                 <FancyMarketsRow
                    marketType={`Fancy ${ir_fancy_2_10.innings} ${ir_fancy_2_10.overs}`}
                    team={ir_fancy_2_10.team}
                    status={ir_fancy_2_10.status}
                    runs={ir_fancy_2_10.runs}
                    finalMarketValue={final_ir_fancy_2_10}
                    onFancyMarketChange={e=>this.props.handleFancyMarketsChange(e, "fancy_2_10")}
                    settleVoidBtn={settleVoidFancy_2_10_Btn}
                />

                <FancyMarketsRow
                    marketType={`Fancy ${ir_fancy_2_12.innings} ${ir_fancy_2_12.overs}`}
                    team={ir_fancy_2_12.team}
                    status={ir_fancy_2_12.status}
                    runs={ir_fancy_2_12.runs}
                    finalMarketValue={final_ir_fancy_2_12}
                    onFancyMarketChange={e=>this.props.handleFancyMarketsChange(e, "fancy_2_12")}
                    settleVoidBtn={settleVoidFancy_2_12_Btn}
                />

                <FancyMarketsRow
                    marketType={`Fancy ${ir_fancy_2_15.innings} ${ir_fancy_2_15.overs}`}
                    team={ir_fancy_2_15.team}
                    status={ir_fancy_2_15.status}
                    runs={ir_fancy_2_15.runs}
                    finalMarketValue={final_ir_fancy_2_15}
                    onFancyMarketChange={e=>this.props.handleFancyMarketsChange(e, "fancy_2_15")}
                    settleVoidBtn={settleVoidFancy_2_15_Btn}
                />  
               
            </tbody>
        )
    }
}

SettleTbody.propTypes = {
    mo: PropTypes.shape({
        status: PropTypes.oneOf([
            "inactive", 
            "active", 
            "ready_to_settle", 
            "settled"
        ]).isRequired,

        winner: PropTypes.string,

        finalMo: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),
        

        isMatchOddsSettled: PropTypes.bool,      
        isMatchOddsVoided: PropTypes.bool,

        isShowAction:PropTypes.bool,
    }).isRequired,

    ir_lambi: PropTypes.shape({
        innings: PropTypes.oneOf([0, 1, 2]).isRequired,

        overs: PropTypes.number,
        runs: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),        
        status: PropTypes.oneOf([
            "inactive", 
            "active", 
            "ready_to_settle", 
            "settled"
        ]).isRequired,       
        team: PropTypes.string,

        finalLambi: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),

        isLambiSettled: PropTypes.bool,      
        isLambiVoided: PropTypes.bool,

        isShowAction:PropTypes.bool,
    }).isRequired,

    ir_fancy_1_6: PropTypes.shape({
        innings: PropTypes.oneOf([0, 1, 2]).isRequired,

        overs: PropTypes.number,
        runs: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),       
        status: PropTypes.oneOf([
            "inactive", 
            "active", 
            "ready_to_settle", 
            "settled"
        ]).isRequired,       
        team: PropTypes.string,

        final_ir_fancy_1_6: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),

        isFancySettled: PropTypes.bool,      
        isFancyVoided: PropTypes.bool,

        isShowAction:PropTypes.bool,
    }).isRequired,

    ir_fancy_1_12: PropTypes.shape({
        innings: PropTypes.oneOf([0, 1, 2]).isRequired,

        overs: PropTypes.number,
        runs: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),        
        status: PropTypes.oneOf([
            "inactive", 
            "active", 
            "ready_to_settle", 
            "settled"
        ]).isRequired,       
        team: PropTypes.string,

        final_ir_fancy_1_12: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),

        isFancySettled: PropTypes.bool,      
        isFancyVoided: PropTypes.bool,

        isShowAction:PropTypes.bool,
    }).isRequired,

    ir_fancy_2_6: PropTypes.shape({
        innings: PropTypes.oneOf([0, 1, 2]).isRequired,

        overs: PropTypes.number,
        runs: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),       
        status: PropTypes.oneOf([
            "inactive", 
            "active", 
            "ready_to_settle", 
            "settled"
        ]).isRequired,       
        team: PropTypes.string,

        final_ir_fancy_2_6: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),

        isFancySettled: PropTypes.bool,      
        isFancyVoided: PropTypes.bool,

        isShowAction:PropTypes.bool,
    }).isRequired,

    ir_fancy_2_12: PropTypes.shape({
        innings: PropTypes.oneOf([0, 1, 2]).isRequired,

        overs: PropTypes.number,
        runs: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),        
        status: PropTypes.oneOf([
            "inactive", 
            "active", 
            "ready_to_settle", 
            "settled"
        ]).isRequired,       
        team: PropTypes.string,

        final_ir_fancy_2_12: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),

        isFancySettled: PropTypes.bool,      
        isFancyVoided: PropTypes.bool,

        isShowAction:PropTypes.bool,
    }).isRequired,

    home: PropTypes.string,
    away: PropTypes.string,  

    showMatchoddsAction: PropTypes.func.isRequired,
    hideMatchoddsAction: PropTypes.func.isRequired,

    showLambiAction: PropTypes.func.isRequired,
    hideLambiAction: PropTypes.func.isRequired,

    showFancyMarketAction: PropTypes.func.isRequired,
    hideFancyMarketAction: PropTypes.func.isRequired,

    handleMatchoddsChange: PropTypes.func.isRequired,
    handleLambiChange: PropTypes.func.isRequired,
    handleFancyMarketsChange: PropTypes.func.isRequired,

}

export default SettleTbody