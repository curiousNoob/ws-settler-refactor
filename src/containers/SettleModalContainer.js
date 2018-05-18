
import { connect } from "react-redux"


import actions from '../actions'
import SettleModal from '../components/SettleModal'


const mapStateToProps = state =>{
  return {    
    isLoading: state.auth.isLoading,
    isLoggedIn: state.auth.isLoggedIn,
    isLogInError: state.auth.isLogInError,

    appinfo:state.cricketApp.appinfo,
    name:state.cricketApp.name,
  }
}

const mapDispatchToProps= dispatch=>{
  return {    
    checkCookies:()=>{
      dispatch(actions.checkCookies())
    }
  }
}

const SettleModalContainer=connect(mapStateToProps, mapDispatchToProps)(SettleModal)


export default SettleModalContainer

//x
 <SettleModal 
          marketType={finalMarketSelectedForModal!=""?marketTypeToModalNameMap[finalMarketSelectedForModal]:"No Market"}
          showModal={isShowMarketModal}
          finalValue={finalMarketValueForModal}
                   
          settleAction={()=>{
                              settleAction(
                                ws,

                                lambi,fancy_1_6, fancy_1_12, fancy_2_6, 
                                fancy_2_12,finalMo, finalLambi, 

                                isSettle, isVoid, finalMarketSelectedForModal,
                                finalMarketValueForModal,handleHide
                              )
                            }
                        }

          handleHide={handleHide}
          isSettle={isSettle}
          isVoid={isVoid}          
        />  