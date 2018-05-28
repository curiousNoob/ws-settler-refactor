
import { connect } from "react-redux"


import actions from '../actions'
import ActionBtn from '../components/ActionBtn'


const mapStateToProps = (state, ownProps) =>{
  return {    
    isVoided:ownProps.isVoided,  
    isSettled:ownProps.isSettled,    

    status:ownProps.status,  
    isShowAction:ownProps.isShowAction,  
  }
}

const mapDispatchToProps= (dispatch, ownProps) => {
  return {
    onAction:(btnType)=>{
      dispatch(actions.showSettleModal())

      if (btnType === "settle") {
        dispatch(actions.setSettleModalToSettleState())
      } else if (btnType === "void") {
        dispatch(actions.setSettleModalToVoidState())
      }

      dispatch(actions.setSettleModalFinalValue(ownProps.finalValue))
      dispatch(actions.setSettleModalFinalMarketSelected(ownProps.finalMarketSelected))     
      
    },

    showAction:ownProps.showAction,  
    hideAction:ownProps.hideAction,
  }
}

const ActionBtnContainer=connect(mapStateToProps, mapDispatchToProps)(ActionBtn)


export default ActionBtnContainer