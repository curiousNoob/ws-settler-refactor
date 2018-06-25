import { connect } from "react-redux"

import actions from '../actions'
import SettleTbody from '../components/SettleTbody'


const mapStateToProps = (state, ownProps) => {
  return {
    mo: state.matchOdds,
    ir_lambi: state.lambi,
    ir_fancy_1_6: state.fancy_1_6,
    ir_fancy_1_10: state.fancy_1_10,
    ir_fancy_1_12: state.fancy_1_12,
    ir_fancy_1_15: state.fancy_1_15,
    ir_fancy_2_6: state.fancy_2_6,
    ir_fancy_2_10: state.fancy_2_10,
    ir_fancy_2_12: state.fancy_2_12,
    ir_fancy_2_15: state.fancy_2_15,

    finalMo:state.matchOdds.finalMo,
    finalLambi:state.lambi.finalLambi,
    final_ir_fancy_1_6:state.fancy_1_6.final_ir_fancy,            
    final_ir_fancy_1_10:state.fancy_1_10.final_ir_fancy,            
    final_ir_fancy_1_12:state.fancy_1_12.final_ir_fancy,            
    final_ir_fancy_1_15:state.fancy_1_15.final_ir_fancy,            
    final_ir_fancy_2_6:state.fancy_2_6.final_ir_fancy,            
    final_ir_fancy_2_10:state.fancy_2_10.final_ir_fancy,            
    final_ir_fancy_2_12:state.fancy_2_12.final_ir_fancy,
    final_ir_fancy_2_15:state.fancy_2_15.final_ir_fancy,

    home:state.cricketApp.home,
    away:state.cricketApp.away,
    
    isMatchOddsVoided:state.matchOdds.isMatchOddsVoided,
    isMatchOddsSettled:state.matchOdds.isMatchOddsSettled,

    isLambiVoided:state.lambi.isLambiVoided,
    isLambiSettled:state.lambi.isLambiSettled,

    isFancy_1_6_Settled:state.fancy_1_6.isFancySettled,
    isFancy_1_6_Voided:state.fancy_1_6.isFancyVoided,

    isFancy_1_10_Settled:state.fancy_1_10.isFancySettled,
    isFancy_1_10_Voided:state.fancy_1_10.isFancyVoided,

    isFancy_1_12_Settled:state.fancy_1_12.isFancySettled,
    isFancy_1_12_Voided:state.fancy_1_12.isFancyVoided,

    isFancy_1_15_Settled:state.fancy_1_15.isFancySettled,
    isFancy_1_15_Voided:state.fancy_1_15.isFancyVoided,

    isFancy_2_6_Settled:state.fancy_2_6.isFancySettled,
    isFancy_2_6_Voided:state.fancy_2_6.isFancyVoided,

    isFancy_2_10_Settled:state.fancy_2_10.isFancySettled,
    isFancy_2_10_Voided:state.fancy_2_10.isFancyVoided,

    isFancy_2_12_Settled:state.fancy_2_12.isFancySettled,
    isFancy_2_12_Voided:state.fancy_2_12.isFancyVoided,

    isFancy_2_15_Settled:state.fancy_2_15.isFancySettled,
    isFancy_2_15_Voided:state.fancy_2_15.isFancyVoided,

    isShowActionMO: state.matchOdds.isShowAction,
    isShowActionLambi: state.lambi.isShowAction,
    isShowActionFancy_1_6: state.fancy_1_6.isShowAction,
    isShowActionFancy_1_10: state.fancy_1_10.isShowAction,
    isShowActionFancy_1_12: state.fancy_1_12.isShowAction,
    isShowActionFancy_1_15: state.fancy_1_15.isShowAction,
    isShowActionFancy_2_6: state.fancy_2_6.isShowAction,
    isShowActionFancy_2_10: state.fancy_2_10.isShowAction,
    isShowActionFancy_2_12: state.fancy_2_12.isShowAction,
    isShowActionFancy_2_15: state.fancy_2_15.isShowAction,
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

        case "fancy_1_10":
            dispatch(actions.setFinalFancy_1_10(finalFancyVal))
            break

        case "fancy_1_12":
          dispatch(actions.setFinalFancy_1_12(finalFancyVal))
          break

        case "fancy_1_15":
          dispatch(actions.setFinalFancy_1_15(finalFancyVal))
          break

        case "fancy_2_6":
          dispatch(actions.setFinalFancy_2_6(finalFancyVal))
          break

        case "fancy_2_10":
          dispatch(actions.setFinalFancy_2_10(finalFancyVal))
          break

        case "fancy_2_12":
          dispatch(actions.setFinalFancy_2_12(finalFancyVal))
          break

        case "fancy_2_15":
          dispatch(actions.setFinalFancy_2_15(finalFancyVal))
          break

      }
    },

    showMatchoddsAction:() => {
      dispatch(actions.showMatchOddsAction())
    },
    hideMatchoddsAction:() => {
      dispatch(actions.hideMatchOddsAction())
    },

    showLambiAction:() => {
      dispatch(actions.showLambiAction())
    },
    hideLambiAction:() => {
      dispatch(actions.hideLambiAction())
    },

    showFancyMarketAction:(marketType) => {
      switch(marketType){
        case "fancy_1_6":
            dispatch(actions.showFancy_1_6_Action())
            break

        case "fancy_1_10":
            dispatch(actions.showFancy_1_10_Action())
            break

        case "fancy_1_12":
            dispatch(actions.showFancy_1_12_Action())
            break

        case "fancy_1_15":
            dispatch(actions.showFancy_1_15_Action())
            break

        case "fancy_2_6":
            dispatch(actions.showFancy_2_6_Action())
            break

        case "fancy_2_10":
            dispatch(actions.showFancy_2_10_Action())
            break

        case "fancy_2_12":
            dispatch(actions.showFancy_2_12_Action())
            break

        case "fancy_2_15":
            dispatch(actions.showFancy_2_15_Action())
            break

      }       
    },
    hideFancyMarketAction:(marketType) => {
      switch(marketType){
        case "fancy_1_6":
            dispatch(actions.hideFancy_1_6_Action())
            break

        case "fancy_1_10":
            dispatch(actions.hideFancy_1_10_Action())
            break

        case "fancy_1_12":
            dispatch(actions.hideFancy_1_12_Action())
            break

        case "fancy_1_15":
            dispatch(actions.hideFancy_1_15_Action())
            break

        case "fancy_2_6":
            dispatch(actions.hideFancy_2_6_Action())
            break

        case "fancy_2_10":
            dispatch(actions.hideFancy_2_10_Action())
            break

        case "fancy_2_12":
            dispatch(actions.hideFancy_2_12_Action())
            break

        case "fancy_2_15":
            dispatch(actions.hideFancy_2_15_Action())
            break
      }
    },
    
  }
}

const SettleTbodyContainer=connect(mapStateToProps, mapDispatchToProps)(SettleTbody)


export default SettleTbodyContainer