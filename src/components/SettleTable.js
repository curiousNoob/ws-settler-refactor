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
import SettleTbody from './SettleTbody'
import TableNavigation from './TableNavigation'
import SettleModal from './SettleModal'



import { isProduction } from '../constants'


class SettleTable extends Component {
  constructor() {
    super()

    this.state = {
      mo: {
        status: "inactive",//active, inactive, ready_to_settle
        winner: "",
      },
      ir_lambi: {
        runs: "",
        status: "inactive",
        team: "",        
      },      
      ir_fancy_1_6: {
        overs: 6,
        runs: 0,        
        status: "inactive",        
        team: "Delhi Daredevils"
      },
      ir_fancy_1_12: {
        overs: 6,
        runs: 0,
        status: "inactive",
        team: "Delhi Daredevils"
      },
      ir_fancy_2_6: {
        overs: 6,
        runs: 0,
        status: "inactive",
        team: "Kolkata Knight Riders"
      },
      ir_fancy_2_12: {
        overs: 6,
        runs: 0,
        status: "inactive",
        team: "Kolkata Knight Riders"
      },

      finalMo: "",
      finalLambi: "",
      final_ir_fancy_1_6: "",
      final_ir_fancy_1_12: "",
      final_ir_fancy_2_6: "",
      final_ir_fancy_2_12: "",

      marketTypeForModal:"",
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
      
      appinfo: "",
      name: "",
    }

    this.handleMatchoddsChange = this.handleMatchoddsChange.bind(this)
    this.handleLambiChange = this.handleLambiChange.bind(this)
    this.handleFancyMarketsChange = this.handleFancyMarketsChange.bind(this)
    
    this.handleActionBtn = this.handleActionBtn.bind(this)   
    
    this.settleAction = this.settleAction.bind(this)    

    this.handleHide = this.handleHide.bind(this)
  }

  componentDidMount() {

    if (!("WebSocket" in window)) {
      alert("This browser does not support WebSockets.");
    }

    let prevLambiRuns;
    let prevMoWinner;
    let prevFancy_1_6_runs
    let prevFancy_1_12_runs
    let prevFancy_2_6_runs
    let prevFancy_2_12_runs

    let once = true;

    const self = this
    let uri;

    if (isProduction) {
      const host = window.location.host;
      const path = "/api/settler/ws";

      if (window.location.protocol === "https:") {
        uri = "wss://" + host + path;
      } else {
        uri = "ws://" + host + path;
      }
    } else {
      uri = "ws://localhost:8080/api/settler/ws"//"wss://cct-stage.iosport.co.uk/api/settler/ws"
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
    this.ws.onmessage = function (evt) {
      const response = JSON.parse(evt.data);
      // console.log("Received data: ", response);

      if (prevMoWinner !== response.mo.winner) {
        self.setState({
          finalMo: response.mo.winner,
        })
      }

      if (prevLambiRuns !== response.ir_lambi.runs) {
        self.setState({
          finalLambi: response.ir_lambi.runs,
        })
      }

      if(prevFancy_1_6_runs!==response.ir_fancy_1_6.runs){
        self.setState({
          final_ir_fancy_1_6:response.ir_fancy_1_6.runs,
        })
      }

      if(prevFancy_1_12_runs!==response.ir_fancy_1_12.runs){
        self.setState({
          final_ir_fancy_1_12:response.ir_fancy_1_12.runs,
        })
      }

      if(prevFancy_2_6_runs!==response.ir_fancy_2_6.runs){
        self.setState({
          final_ir_fancy_2_6:response.ir_fancy_2_6.runs,
        })
      }

      if(prevFancy_2_12_runs!==response.ir_fancy_2_12.runs){
        self.setState({
          final_ir_fancy_2_12:response.ir_fancy_2_12.runs,
        })
      }

      prevLambiRuns = response.ir_lambi.runs
      prevMoWinner = response.mo.winner
      prevFancy_1_6_runs=response.ir_fancy_1_6.runs
      prevFancy_1_12_runs=response.ir_fancy_1_12.runs
      prevFancy_2_6_runs=response.ir_fancy_2_6.runs
      prevFancy_2_12_runs=response.ir_fancy_2_12.runs

      self.setState(response);

      if (once) {
        self.props.setMatchNames(response.home, response.away)
        once = false
      }
    }
  }

  componentWillUnmount() {
    if (this.ws !== undefined) {
      console.log("WS is getting closed")
      this.ws.close();
      this.ws = undefined;
    }
  }


  handleMatchoddsChange(e) {
    const val = e.target.value

    this.setState({
      finalMo: val,
    })
  }

  handleLambiChange(e) {
    const val = Math.floor(e.target.value);

    if (val < 0) {
      return
    }
    
    this.setState({
      finalLambi: val,
    })
  }
  
  handleFancyMarketsChange(e, marketType) {
    const val = Math.floor(e.target.value);
    if (val < 0) {
      return
    }
    console.log("handleFancyMarketsChange", val, marketType)

    switch (marketType) {
      case "fancy_1_6":
        this.setState({
          final_ir_fancy_1_6: val,
        })
        break
      case "fancy_1_12":
        this.setState({
          final_ir_fancy_1_12: val,
        })
        break
      case "fancy_2_6":
        this.setState({
          final_ir_fancy_2_6: val,
        })
        break
      case "fancy_2_12":
        this.setState({
          final_ir_fancy_2_12: val,
        })
        break
    }
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
          finalMarketValueForModal: this.state.finalMo,
          finalMarketSelectedForModal: "matchOdds"
        })
        break
      case "lambi":
        this.setState({
          finalMarketValueForModal: this.state.finalLambi,
          finalMarketSelectedForModal: "lambi"
        })
        break
      case "fancy_1_6":
        this.setState({
          finalMarketValueForModal: this.state.final_ir_fancy_1_6,
          finalMarketSelectedForModal: "ir_fancy_1_6"
        })
        break
      case "fancy_1_12":
        this.setState({
          finalMarketValueForModal: this.state.final_ir_fancy_1_12,
          finalMarketSelectedForModal: "ir_fancy_1_12"
        })
        break
      case "fancy_2_6":
        this.setState({
          finalMarketValueForModal: this.state.final_ir_fancy_2_6,
          finalMarketSelectedForModal: "ir_fancy_2_6"
        })
        break
      case "fancy_2_12":
        this.setState({
          finalMarketValueForModal: this.state.final_ir_fancy_2_12,
          finalMarketSelectedForModal: "ir_fancy_2_12"
        })
        break
    }
  }


  settleAction(){   

    const { 
      marketTypeForModal,

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
          <SettleTbody
            {...this.state}
            
            onMatchoddsChange={this.handleMatchoddsChange}
            onLambiChange={this.handleLambiChange}
            onFancyMarketsChange={this.handleFancyMarketsChange}
            
            onActionBtn={this.handleActionBtn}
            
            onFancyMarketBtn={this.handleFancyMarketBtn}
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