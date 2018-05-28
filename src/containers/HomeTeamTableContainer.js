
import { connect } from "react-redux"

import actions from '../actions'
import TeamTable from '../components/TeamTable'


const mapStateToProps = state => {
  return {
    batsmenArr: state.homeTeam.batsmenArr,
    isShowActionArr: state.homeTeam.isShowActionArr,
    isSettledArr: state.homeTeam.isSettledArr,
    isVoidedArr: state.homeTeam.isVoidedArr,
    finalRunsArr:state.homeTeam.finalRunsArr,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    showBatsmanAction: (index) => { dispatch(actions.showHomeTeamBatsmanAction(index)) },
    hideBatsmanAction:(index) => { dispatch(actions.hideHomeTeamBatsmanAction(index)) },

    handleBatsmanRunsChange:(e, indexBatsman) => {
      const finalValue=e.target.value
      
      if(finalValue<0)
        return

      dispatch(actions.setFinalHomeTeamBatsmanValue(finalValue, indexBatsman)) 
    },
  }
}

const HomeTeamTableContainer = connect(mapStateToProps, mapDispatchToProps)(TeamTable)


export default HomeTeamTableContainer