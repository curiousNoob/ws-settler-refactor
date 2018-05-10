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
    closeWebSocketConnection:() => {
      dispatch(actions.closeWebsocket())
    },  
  }
}

const SettleTableContainer=connect(mapStateToProps, mapDispatchToProps)(SettleTable)


export default SettleTableContainer