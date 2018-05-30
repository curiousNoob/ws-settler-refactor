
import { connect } from "react-redux"

import actions from '../actions'
import TeamTable from '../components/TeamTable'


const mapStateToProps = state =>{
  return {    
    batsmenArr: state.awayTeam.batsmenArr,
    isShowActionArr: state.awayTeam.isShowActionArr,
    isSettledArr: state.awayTeam.isSettledArr,
    isVoidedArr: state.awayTeam.isVoidedArr,
    finalRunsArr:state.awayTeam.finalRunsArr,
  }
}

const mapDispatchToProps= dispatch=>{
  return {    
    showBatsmanAction: (index) => { 
      dispatch(
        actions.showAwayTeamBatsmanAction(index)
      ) 
    },
    hideBatsmanAction:(index) => { 
      dispatch(
        actions.hideAwayTeamBatsmanAction(index)
      ) 
    },

    handleBatsmanRunsChange:(e, batsmanIndex) => {
      const finalValue=e.target.value
      
      if(finalValue<0)
        return

      dispatch(actions.setFinalAwayTeamBatsmanValue(finalValue, batsmanIndex)) 
    },
  }
}

const AwayTeamTableContainer=connect(
  mapStateToProps, 
  mapDispatchToProps
)(TeamTable)


export default AwayTeamTableContainer