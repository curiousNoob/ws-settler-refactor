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

    this.settleAction = this.settleAction.bind(this)
  }

  componentDidMount(){
    this.props.checkWebSocketSupp()

    this.props.establishWebSocketConnection()
  }

  componentWillUnmount(){
    if(this.props.ws!==undefined){
      this.props.closeWebSocketConnection()
    }      
  }

  settleAction(){   

    const {

      statusFancyStruct,
      
    } = this.state

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

    if (this.props.ws.readyState === this.props.ws.OPEN) {
      if (isSettle) {  
        this.props.ws.send(settleMsgOverWS)
        this.setState(marketSettledObj)

        settledFunc()      
      } else if (isVoid) {
        this.props. ws.send(voidMsgOverWS)
        this.setState(marketVoidedObj)

        voidedFunc()
      }
    }

    this.props.handleHide()
  } 
   

  render() {

    const {      
      statusFancyStruct, 
    }=this.state

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
          <SettleTbodyContainer

            statusFancyStruct={statusFancyStruct}            
          />
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