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

  render() { 
    const {
      ws,

      mo,
      lambi,
      fancy_1_6,
      fancy_1_12,
      fancy_2_6,
      fancy_2_12,

      finalMo, 
      finalLambi,

      finalMarketSelectedForModal,
      finalMarketValueForModal,
      isShowMarketModal,
      isSettle,
      isVoid,


      settleAction,
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
                   
          settleAction={()=>{
                              settleAction(
                                ws,

                                lambi,fancy_1_6, fancy_1_12, fancy_2_6, 
                                fancy_2_12,finalMo, finalLambi, 

                                isSettle, isVoid, finalMarketSelectedForModal,
                                finalMarketValueForModal,handleHide
                              )
                            }
                        }

          handleHide={handleHide}
          isSettle={isSettle}
          isVoid={isVoid}          
        />  
        
      </div>
    );
  }
}


export default SettleTable