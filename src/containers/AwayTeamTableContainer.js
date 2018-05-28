
import { connect } from "react-redux"

import actions from '../actions'
import TeamTable from '../components/TeamTable'


const mapStateToProps = state =>{
  return {    
    batsmenArr: state.awayTeam.batsmenArr,
  }
}

const mapDispatchToProps= dispatch=>{
  return {    
    
  }
}

const AwayTeamTableContainer=connect(mapStateToProps, mapDispatchToProps)(TeamTable)


export default AwayTeamTableContainer