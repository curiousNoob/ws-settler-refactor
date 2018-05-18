import { connect } from "react-redux"

import actions from '../actions'
import WebSocketConnection from '../hoc/WebSocketConnection'


const mapStateToProps = state =>{
  return {
    ws:state.socket.ws,        
    isNotSuppWebSocket: state.socket.isNotSuppWebSocket,
    webSocketErr:state.socket.webSocketErr,
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
  }
}


const WebSocketConnectionContainer=connect(mapStateToProps, mapDispatchToProps)(WebSocketConnection)


export default WebSocketConnectionContainer