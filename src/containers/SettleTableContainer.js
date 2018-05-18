import { connect } from "react-redux"

import actions from '../actions'
import SettleTable from '../components/SettleTable'


const mapStateToProps = state =>{
  return {
    ws:state.socket.ws,        
    isNotSuppWebSocket: state.socket.isNotSuppWebSocket,
    webSocketErr:state.socket.webSocketErr,

    mo:state.matchOdds,
    lambi: state.lambi,
    fancy_1_6: state.fancy_1_6,
    fancy_1_12: state.fancy_1_12,
    fancy_2_6: state.fancy_2_6,
    fancy_2_12: state.fancy_2_12,

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


    settleAction:(
      ws,

      lambi,
      fancy_1_6,
      fancy_1_12,
      fancy_2_6,
      fancy_2_12,

      finalMo, 
      finalLambi,

      isSettle, 
      isVoid,

      finalMarketSelectedForModal,
      finalMarketValueForModal,

      handleHide,
    ) => {     

      switch(finalMarketSelectedForModal){
        case "matchOdds":
          if(!finalMo){
            return
          }
          
          if (ws.readyState === ws.OPEN) {
            if (isSettle) {  
              dispatch(actions.settleMatchOdds_SendWS(ws, finalMo))
            } else if (isVoid) {              
              dispatch(actions.voidMatchOdds_SendWS(ws))
            }
          }

          break
        case "lambi":
          if(!finalLambi){
            return
          }

          if (ws.readyState === ws.OPEN) {
            if (isSettle) {  
              dispatch(actions.settleLambi_SendWS(ws, lambi.innings, lambi.overs, finalLambi))
            } else if (isVoid) {              
              dispatch(actions.voidLambi_SendWS(ws, lambi.innings, lambi.overs))
            }
          }

          break
        case "ir_fancy_1_6":
          if ( !finalMarketValueForModal) {
            return
          }

          if (ws.readyState === ws.OPEN) {
            if (isSettle) {  
              dispatch(actions.settleFancy_1_6_SendWS(ws, fancy_1_6.innings, fancy_1_6.overs, finalMarketValueForModal))
            } else if (isVoid) {              
              dispatch(actions.voidFancy_1_6_SendWS(ws, fancy_1_6.innings, fancy_1_6.overs))
            }
          }

          break
        case "ir_fancy_1_12":
          if ( !finalMarketValueForModal) {
            return
          }

          if (ws.readyState === ws.OPEN) {
            if (isSettle) {  
              dispatch(actions.settleFancy_1_12_SendWS(ws, fancy_1_12.innings, fancy_1_12.overs, finalMarketValueForModal))
            } else if (isVoid) {              
              dispatch(actions.voidFancy_1_12_SendWS(ws, fancy_1_12.innings, fancy_1_12.overs))
            }
          }

          break
        case "ir_fancy_2_6":
          if ( !finalMarketValueForModal) {
            return
          }

          if (ws.readyState === ws.OPEN) {
            if (isSettle) {  
              dispatch(actions.settleFancy_2_6_SendWS(ws, fancy_2_6.innings, fancy_2_6.overs, finalMarketValueForModal))
            } else if (isVoid) {              
              dispatch(actions.voidFancy_2_6_SendWS(ws, fancy_2_6.innings, fancy_2_6.overs))
            }
          }

          break
        case "ir_fancy_2_12":
          if ( !finalMarketValueForModal) {
            return
          }

          if (ws.readyState === ws.OPEN) {
            if (isSettle) {  
              dispatch(actions.settleFancy_2_12_SendWS(ws, fancy_2_12.innings, fancy_2_12.overs, finalMarketValueForModal))
            } else if (isVoid) {              
              dispatch(actions.voidFancy_2_12_SendWS(ws, fancy_2_12.innings, fancy_2_12.overs))
            }
          }

          break
      }

      handleHide()
    },
    
  }
}


const SettleTableContainer=connect(mapStateToProps, mapDispatchToProps)(SettleTable)


export default SettleTableContainer