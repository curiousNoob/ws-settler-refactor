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

    this.settleAction = this.settleAction.bind(this)
  }

  componentDidMount(){
    this.props.checkWebSocketSupp()
    this.props.establishWebSocketConnection()
  }

  componentWillUnmount(){
    const { ws } = this.props

    if(ws!==undefined){
      this.props.closeWebSocketConnection(ws)
    }      
  }

  settleAction(){ 
    const {
      finalMo,
      finalLambi,

      isSettle,
      isVoid,

      finalMarketSelectedForModal,
      finalMarketValueForModal,  
    } = this.props

    let marketSettledObj 
    let marketVoidedObj

    let settleMsgOverWS
    let voidMsgOverWS

    let settledFunc=()=>{}
    let voidedFunc=()=>{}

    switch(finalMarketSelectedForModal){
      case "matchOdds":
        if(!finalMo){
          return
        }
        
        //change loc
        settledFunc=this.props.settledMatchOdds
        voidedFunc=this.props.voidedMatchOdds

        settleMsgOverWS=JSON.stringify({ "market": "mo", "settle": finalMo })
        voidMsgOverWS=JSON.stringify({ "market": "mo", "void": true })

        break
      case "lambi":
        if(!finalLambi){
          return
        }

        settledFunc=this.props.settledLambi
        voidedFunc=this.props.voidedLambi

        settleMsgOverWS=JSON.stringify({ "market": "ir_lambi", "settle": Number(finalLambi) })
        voidMsgOverWS=JSON.stringify({ "market": "ir_lambi", "void": true })

        break
      case "ir_fancy_1_6":
        if ( !finalMarketValueForModal) {
          return
        }

        settledFunc=this.props.settledFancy_1_6
        voidedFunc=this.props.voidedFancy_1_6

        settleMsgOverWS=JSON.stringify({ "market": finalMarketSelectedForModal, "settle": Number(finalMarketValueForModal) })
        voidMsgOverWS=JSON.stringify({ "market": finalMarketSelectedForModal, "void": true })

        break
      case "ir_fancy_1_12":
        if ( !finalMarketValueForModal) {
          return
        }

        settledFunc=this.props.settledFancy_1_12
        voidedFunc=this.props.voidedFancy_1_12

        settleMsgOverWS=JSON.stringify({ "market": finalMarketSelectedForModal, "settle": Number(finalMarketValueForModal) })
        voidMsgOverWS=JSON.stringify({ "market": finalMarketSelectedForModal, "void": true })

        break
      case "ir_fancy_2_6":
        if ( !finalMarketValueForModal) {
          return
        }

        settledFunc=this.props.settledFancy_2_6
        voidedFunc=this.props.voidedFancy_2_6

        settleMsgOverWS=JSON.stringify({ "market": finalMarketSelectedForModal, "settle": Number(finalMarketValueForModal) })
        voidMsgOverWS=JSON.stringify({ "market": finalMarketSelectedForModal, "void": true })

        break
      case "ir_fancy_2_12":
        if ( !finalMarketValueForModal) {
          return
        }

        settledFunc=this.props.settledFancy_2_12
        voidedFunc=this.props.voidedFancy_2_12

        settleMsgOverWS=JSON.stringify({ "market": finalMarketSelectedForModal, "settle": Number(finalMarketValueForModal) })
        voidMsgOverWS=JSON.stringify({ "market": finalMarketSelectedForModal, "void": true })

        break
    }

    if (this.props.ws.readyState === this.props.ws.OPEN) {
      if (isSettle) {  
          this.props.ws.send(settleMsgOverWS)

        settledFunc()      
      } else if (isVoid) {
        this.props.ws.send(voidMsgOverWS)

        voidedFunc()
      }
    }

    this.props.handleHide()
  } 
   

  render() { 
    const {
      finalMarketSelectedForModal,
      finalMarketValueForModal,
      isShowMarketModal,
      isSettle,
      isVoid,

      handleHide,

    } = this.props

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
          <SettleTbodyContainer />
        </table>

        <SettleModal 
          marketType={finalMarketSelectedForModal!=""?marketTypeToModalNameMap[finalMarketSelectedForModal]:"No Market"}
          showModal={isShowMarketModal}
          finalValue={finalMarketValueForModal}
                   
          settleAction={this.settleAction}

          handleHide={handleHide}
          isSettle={isSettle}
          isVoid={isVoid}          
        />  
        
      </div>
    );
  }
}


export default SettleTable