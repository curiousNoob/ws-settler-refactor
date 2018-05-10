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

import SettleThead from './SettleThead'
import TableNavigation from './TableNavigation'
import SettleModal from './SettleModal'

import SettleTbodyContainer from '../containers/SettleTbodyContainer'

import { isProduction } from '../constants'


class SettleTable extends Component {
  constructor() {
    super()

    this.state = {
      finalMarketValueForModal: "",
      finalMarketSelectedForModal: "",
      isShowMarketModal: false,
      isSettle: false,
      isVoid: false,
      
      isMatchOddsSettled: false,      
      isMatchOddsVoided: false,
      isLambiSettled: false,      
      isLambiVoided: false,
      statusFancyStruct: {
        ir_fancy_1_6: {
          isFancyVoided: false,
          isFancySettled: false,
        },
        ir_fancy_1_12: {
          isFancyVoided: false,
          isFancySettled: false,
        },
        ir_fancy_2_6: {
          isFancyVoided: false,
          isFancySettled: false,
        },
        ir_fancy_2_12: {
          isFancyVoided: false,
          isFancySettled: false,
        }
      },     
    }

    this.handleActionBtn = this.handleActionBtn.bind(this)   
    
    this.settleAction = this.settleAction.bind(this)    

    this.handleHide = this.handleHide.bind(this)
  }

  componentDidMount(){
    this.props.checkWebSocketSupp()

    this.props.establishWebSocketConnection()
  }

  componentWillUnmount(){
    this.props.closeWebSocketConnection()
  }


  handleActionBtn(btnType, marketType) {
    this.setState({
      isShowMarketModal: true,
    })

    if (btnType === "settle") {
      this.setState({
        isSettle: true,
        isVoid: false
      })
    } else if (btnType === "void") {
      this.setState({
        isSettle: false,
        isVoid: true,        
      })
    }    

    switch (marketType) {
      case "matchOdds":
        this.setState({
          finalMarketValueForModal: this.props.finalMo,
          finalMarketSelectedForModal: "matchOdds"
        })
        break
      case "lambi":
        this.setState({
          finalMarketValueForModal: this.props.finalLambi,
          finalMarketSelectedForModal: "lambi"
        })
        break
      case "fancy_1_6":
        this.setState({
          finalMarketValueForModal: this.props.final_ir_fancy_1_6,
          finalMarketSelectedForModal: "ir_fancy_1_6"
        })
        break
      case "fancy_1_12":
        this.setState({
          finalMarketValueForModal: this.props.final_ir_fancy_1_12,
          finalMarketSelectedForModal: "ir_fancy_1_12"
        })
        break
      case "fancy_2_6":
        this.setState({
          finalMarketValueForModal: this.props.final_ir_fancy_2_6,
          finalMarketSelectedForModal: "ir_fancy_2_6"
        })
        break
      case "fancy_2_12":
        this.setState({
          finalMarketValueForModal: this.props.final_ir_fancy_2_12,
          finalMarketSelectedForModal: "ir_fancy_2_12"
        })
        break
    }
  }


  settleAction(){   

    const { 
      finalMo,
      finalLambi,  

      isSettle,
      isVoid,

      statusFancyStruct,
      finalMarketSelectedForModal,
      finalMarketValueForModal,
    } = this.state

    let marketSettledObj 
    let marketVoidedObj
    let settleMsgOverWS
    let voidMsgOverWS

    switch(finalMarketSelectedForModal){
      case "matchOdds":
        if(!finalMo){
          return
        }
        
        marketSettledObj={isMatchOddsSettled: true,}
        marketVoidedObj={isMatchOddsVoided: true,}

        settleMsgOverWS=JSON.stringify({ "market": "mo", "settle": finalMo })
        voidMsgOverWS=JSON.stringify({ "market": "mo", "void": true })

        break
      case "lambi":
        if(!finalLambi){
          return
        }

        marketSettledObj={isLambiSettled: true,}
        marketVoidedObj={isLambiVoided: true,}

        settleMsgOverWS=JSON.stringify({ "market": "ir_lambi", "settle": Number(finalLambi) })
        voidMsgOverWS=JSON.stringify({ "market": "ir_lambi", "void": true })

        break
      case "ir_fancy_1_6":
      case "ir_fancy_1_12":
      case "ir_fancy_2_6":
      case "ir_fancy_2_12":
        if ( !finalMarketValueForModal) {
          return
        }

        let statusFancyStruct = JSON.parse(JSON.stringify(this.state.statusFancyStruct))          

        statusFancyStruct[finalMarketSelectedForModal]={...statusFancyStruct[finalMarketSelectedForModal],isFancySettled:true}          
        marketSettledObj={statusFancyStruct,}

        statusFancyStruct={...statusFancyStruct}

        statusFancyStruct[finalMarketSelectedForModal]={...statusFancyStruct[finalMarketSelectedForModal],isFancyVoided:true}
        marketVoidedObj={statusFancyStruct}

        settleMsgOverWS=JSON.stringify({ "market": finalMarketSelectedForModal, "settle": Number(finalMarketValueForModal) })
        voidMsgOverWS=JSON.stringify({ "market": finalMarketSelectedForModal, "void": true })

        break
    }

    if (this.ws.readyState === this.ws.OPEN) {
      if (isSettle) {  
        this.ws.send(settleMsgOverWS)
        this.setState(marketSettledObj)      
      } else if (isVoid) {
        this.ws.send(voidMsgOverWS)
        this.setState(marketVoidedObj)
      }
    }

    this.handleHide()
  } 

  
  handleHide() {
    this.setState({
      isShowMarketModal: false,
      isSettle: false,
      isVoid: false
    })
  }
  

  render() {

    const {
      finalMarketSelectedForModal,
      isShowMarketModal,
      finalMarketValueForModal,
      isSettle,
      isVoid,

      isMatchOddsVoided,
      isMatchOddsSettled,
      isLambiVoided,
      isLambiSettled,
      statusFancyStruct, 
    }=this.state

    const marketTypeToModalNameMap = {
      matchOdds:"Match Odds",
      lambi:"Lambi",
      ir_fancy_1_6:"Fancy 1 6",
      ir_fancy_1_12:"Fancy 1 12",
      ir_fancy_2_6:"Fancy 2 6",
      ir_fancy_2_12:"Fancy 2 12",
    }
    
    return (
      <div>
        <TableNavigation activeKey="1" />
        <table className="table table-bordered table-condensed">
          <SettleThead />
          <SettleTbodyContainer
            isMatchOddsVoided={isMatchOddsVoided}
            isMatchOddsSettled={isMatchOddsSettled}
            isLambiVoided={isLambiVoided}
            isLambiSettled={isLambiSettled}
            statusFancyStruct={statusFancyStruct}

            onActionBtn={this.handleActionBtn}
            
          />
        </table>

        <SettleModal 
          marketType={finalMarketSelectedForModal!=""?marketTypeToModalNameMap[finalMarketSelectedForModal]:"No Market"}
          showModal={isShowMarketModal}
          finalValue={finalMarketValueForModal}          
          settleAction={this.settleAction}

          handleHide={this.handleHide}
          isSettle={isSettle}
          isVoid={isVoid}          
        />  
        
      </div>
    );
  }
}


export default SettleTable