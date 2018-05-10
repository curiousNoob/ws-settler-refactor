import { connect } from "react-redux"

import actions from '../actions'
import SettleTbody from '../components/SettleTbody'


const mapStateToProps = (state, ownProps) => {
  return {
    mo: state.matchOdds,
    ir_lambi: state.lambi,
    ir_fancy_1_6: state.fancy_1_6,
    ir_fancy_1_12: state.fancy_1_12,
    ir_fancy_2_6: state.fancy_2_6,
    ir_fancy_2_12: state.fancy_2_12,

    finalMo:state.matchOdds.finalMo,
    finalLambi:state.lambi.finalLambi,
    final_ir_fancy_1_6:state.fancy_1_6.final_ir_fancy_1_6,            
    final_ir_fancy_1_12:state.fancy_1_12.final_ir_fancy_1_12,            
    final_ir_fancy_2_6:state.fancy_2_6.final_ir_fancy_2_6,            
    final_ir_fancy_2_12:state.fancy_2_12.final_ir_fancy_2_12,

    home:state.cricketApp.home,
    away:state.cricketApp.away, 

    isMatchOddsVoided:ownProps.isMatchOddsVoided,
    isMatchOddsSettled:ownProps.isMatchOddsSettled,
    isLambiVoided:ownProps.isLambiVoided,
    isLambiSettled:ownProps.isLambiSettled,
    statusFancyStruct:ownProps.statusFancyStruct, 
  }
}


const mapDispatchToProps= (dispatch, ownProps) => {
  return {    
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

    onActionBtn:ownProps.onActionBtn,
  }
}

const SettleTbodyContainer=connect(mapStateToProps, mapDispatchToProps)(SettleTbody)


export default SettleTbodyContainer