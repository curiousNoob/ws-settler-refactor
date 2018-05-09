
import { connect } from "react-redux"


import actions from '../actions'
import SettleTable from '../components/SettleTable'


const mapStateToProps = state =>{
  return {
    ws:state.socket.ws,        
    isNotSuppWebSocket: state.socket.isNotSuppWebSocket,
    webSocketErr:state.socket.webSocketErr,

    mo: state.matchOdds,
    ir_lambi: state.lambi,
    ir_fancy_1_6: state.fancy_1_6,
    ir_fancy_1_12: state.fancy_1_12,
    ir_fancy_2_6: state.fancy_2_6,
    ir_fancy_2_12: state.fancy_2_12,
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

    handleMatchoddsChange:(e) => {
      const finalMo = e.target.value

      dispatch(actions.setFinalMo(finalMo))
    },
    handleLambiChange:(e)=>{
      const finalLambi = Math.floor(e.target.value)

      if(finalLambi<0){
        return
      }

      dispatch(actions.setFinalLambi(finalLambi))
    },
    handleFancyMarketsChange:(e, marketType)=>{
      const finalFancyVal = Math.floor(e.target.value)

      if (finalFancyVal < 0) {
        return
      }

      switch (marketType) {
        case "fancy_1_6":
          dispatch(actions.setFinalFancy_1_6(finalFancyVal))
          break

        case "fancy_1_12":
          dispatch(actions.setFinalFancy_1_12(finalFancyVal))
          break

        case "fancy_2_6":
          dispatch(actions.setFinalFancy_2_6(finalFancyVal))
          break

        case "fancy_2_12":
          dispatch(actions.setFinalFancy_2_12(finalFancyVal))
          break
      }
    },   
  
  }
}

const SettleTableContainer=connect(mapStateToProps, mapDispatchToProps)(SettleTable)


export default SettleTableContainer