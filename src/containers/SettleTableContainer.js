import { connect } from "react-redux"

import actions from '../actions'
import SettleTable from '../components/SettleTable'


const mapStateToProps = state =>{
  return {
    ws:state.socket.ws,        
    isNotSuppWebSocket: state.socket.isNotSuppWebSocket,
    webSocketErr:state.socket.webSocketErr,

    finalMo:state.matchOdds.finalMo,
    finalLambi:state.lambi.finalLambi,
    final_ir_fancy_1_6:state.fancy_1_6.final_ir_fancy_1_6,            
    final_ir_fancy_1_12:state.fancy_1_12.final_ir_fancy_1_12,            
    final_ir_fancy_2_6:state.fancy_2_6.final_ir_fancy_2_6,            
    final_ir_fancy_2_12:state.fancy_2_12.final_ir_fancy_2_12,

    finalMarketValueForModal: state.settleModal.finalMarketValueForModal,
    finalMarketSelectedForModal: state.settleModal.finalMarketSelectedForModal,
    isShowMarketModal: state.settleModal.isShowMarketModal,
    isSettle: state.settleModal.isSettle,
    isVoid: state.settleModal.isVoid,

  }
}


const mapDispatchToProps= dispatch=>{
  return {    
    checkWebSocketSupp:()=>{
      dispatch(actions.checkWebSocketExist())

      if(!("WebSocket" in window)){
        dispatch(actions.notSuppWebSocket())
      }    
    },
    establishWebSocketConnection:() => {
      dispatch(actions.establishWebSocketConnection())
    },
    closeWebSocketConnection:(ws) => {
      dispatch(actions.closeWebsocket(ws))
    },

    handleHide:()=>{
      dispatch(actions.hideSettleModal())
      dispatch(actions.resetSettleModal())
    },

    settledMatchOdds:() => {
      dispatch(actions.settledMatchOdds())
    },
    voidedMatchOdds:() => {
      dispatch(actions.voidedMatchOdds())
    },

    settledLambi:() => {
      dispatch(actions.settledLambi())
    },
    voidedLambi:() => {
      dispatch(actions.voidedLambi())
    },

    settledFancy_1_6:() => {
      dispatch(actions.settledFancy_1_6())
    },
    voidedFancy_1_6:() => {
      dispatch(actions.voidedFancy_1_6())
    },

    settledFancy_1_12:() => {
      dispatch(actions.settledFancy_1_12())
    },
    voidedFancy_1_12:() => {
      dispatch(actions.voidedFancy_1_12())
    },

    settledFancy_2_6:() => {
      dispatch(actions.settledFancy_2_6())
    },
    voidedFancy_2_6:() => {
      dispatch(actions.voidedFancy_2_6())
    },

    settledFancy_2_12:() => {
      dispatch(actions.settledFancy_2_12())
    },
    voidedFancy_2_12:() => {
      dispatch(actions.voidedFancy_2_12())
    },
    
  }
}


const SettleTableContainer=connect(mapStateToProps, mapDispatchToProps)(SettleTable)


export default SettleTableContainer