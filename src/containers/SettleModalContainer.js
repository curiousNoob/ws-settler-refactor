import { connect } from "react-redux"


import actions from '../actions'
import SettleModal from '../components/SettleModal'


const marketTypeToModalNameMap = {
  matchOdds: "[ Match Odds ]",
  lambi: "[ Lambi ]",
  ir_fancy_1_6: "[ FANCY-1-6 ]",
  ir_fancy_1_10: "[ FANCY-1-10 ]",
  ir_fancy_1_12: "[ FANCY-1-12 ]",
  ir_fancy_1_15: "[ FANCY-1-15 ]",
  ir_fancy_2_6: "[ FANCY-2-6 ]",
  ir_fancy_2_10: "[ FANCY-2-10 ]",
  ir_fancy_2_12: "[ FANCY-2-12 ]",
  ir_fancy_2_15: "[ FANCY-2-15 ]",

  ir_fancy_1_20: "[ FANCY-1-20 ]",
  ir_fancy_1_30: "[ FANCY-1-30 ]",
  ir_fancy_1_40: "[ FANCY-1-40 ]",
  ir_fancy_2_20: "[ FANCY-2-20 ]",
  ir_fancy_2_30: "[ FANCY-2-30 ]",
  ir_fancy_2_40: "[ FANCY-2-40 ]",
}


const mapStateToProps = state => {
  return {
    ws: state.socket.ws,

    mo: state.matchOdds,
    lambi:      state.lambi,
    fancy_1_6:  state.fancy_1_6,
    fancy_1_10: state.fancy_1_10,
    fancy_1_12: state.fancy_1_12,
    fancy_1_15: state.fancy_1_15,
    fancy_2_6:  state.fancy_2_6,
    fancy_2_10: state.fancy_2_10,
    fancy_2_12: state.fancy_2_12,
    fancy_2_15: state.fancy_2_15,

    finalMo: state.matchOdds.finalMo,
    finalLambi: state.lambi.finalLambi,


    finalMarketSelectedForModal: state.settleModal.finalMarketSelectedForModal,
    isSettle: state.settleModal.isSettle,
    isVoid: state.settleModal.isVoid,

    finalValue: state.settleModal.finalMarketValueForModal,
    showModal: state.settleModal.isShowMarketModal,

    marketType: (state.settleModal.marketType != "" ?
      marketTypeToModalNameMap[state.settleModal.marketType] :
      "No Market"
    ),

  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleHide: () => {
      dispatch(actions.hideSettleModal())
      dispatch(actions.resetSettleModal())
    },

    settleAction: (
      ws,

      lambi,
      fancy_1_6,
      fancy_1_10,
      fancy_1_12,
      fancy_1_15,
      fancy_2_6,
      fancy_2_10,
      fancy_2_12,
      fancy_2_15,

      finalMo,
      finalLambi,

      isSettle,
      isVoid,

      finalMarketSelectedForModal,
      finalMarketValueForModal,

      handleHide,
    ) => {

      switch (finalMarketSelectedForModal) {
        case "matchOdds":
          if (finalMo<0) {
            return
          }

          if (ws.readyState === ws.OPEN) {
            if (isSettle) {
              dispatch(actions.settleMatchOdds_SendWS(ws, finalMo))
            } else if (isVoid) {
              dispatch(actions.voidMatchOdds_SendWS(ws))
            }
          }

          break
        case "lambi":
          if (finalLambi<0) {
            return
          }

          if (ws.readyState === ws.OPEN) {
            if (isSettle) {
              dispatch(actions.settleLambi_SendWS(ws, lambi.innings, lambi.overs, finalLambi))
            } else if (isVoid) {
              dispatch(actions.voidLambi_SendWS(ws, lambi.innings, lambi.overs))
            }
          }

          break
        case "ir_fancy_1_6":
          if (finalMarketValueForModal<0) {
            return
          }

          if (ws.readyState === ws.OPEN) {
            if (isSettle) {
              dispatch(
                actions.settleFancy_1_6_SendWS(
                  ws,
                  fancy_1_6.innings,
                  fancy_1_6.overs,
                  finalMarketValueForModal
                )
              )
            } else if (isVoid) {
              dispatch(
                actions.voidFancy_1_6_SendWS(
                  ws, 
                  fancy_1_6.innings, 
                  fancy_1_6.overs
                )
              )
            }
          }

          break
        case "ir_fancy_1_10":
          if (finalMarketValueForModal<0) {
            return
          }

          if (ws.readyState === ws.OPEN) {
            if (isSettle) {
              dispatch(
                actions.settleFancy_1_10_SendWS(
                  ws,
                  fancy_1_10.innings,
                  fancy_1_10.overs,
                  finalMarketValueForModal
                )
              )
            } else if (isVoid) {
              dispatch(
                actions.voidFancy_1_10_SendWS(
                  ws, 
                  fancy_1_10.innings, 
                  fancy_1_10.overs
                )
              )
            }
          }

          break
        case "ir_fancy_1_12":
          if (finalMarketValueForModal<0) {
            return
          }

          if (ws.readyState === ws.OPEN) {
            if (isSettle) {
              dispatch(
                actions.settleFancy_1_12_SendWS(
                  ws, 
                  fancy_1_12.innings, 
                  fancy_1_12.overs, 
                  finalMarketValueForModal
                )
              )
            } else if (isVoid) {
              dispatch(actions.voidFancy_1_12_SendWS(ws, fancy_1_12.innings, fancy_1_12.overs))
            }
          }

          break
        case "ir_fancy_1_15":
          if (finalMarketValueForModal<0) {
            return
          }

          if (ws.readyState === ws.OPEN) {
            if (isSettle) {
              dispatch(
                actions.settleFancy_1_15_SendWS(
                  ws, 
                  fancy_1_15.innings, 
                  fancy_1_15.overs, 
                  finalMarketValueForModal
                )
              )
            } else if (isVoid) {
              dispatch(actions.voidFancy_1_15_SendWS(ws, fancy_1_15.innings, fancy_1_15.overs))
            }
          }

          break
        case "ir_fancy_2_6":
          if (finalMarketValueForModal<0) {
            return
          }

          if (ws.readyState === ws.OPEN) {
            if (isSettle) {
              dispatch(
                actions.settleFancy_2_6_SendWS(
                  ws, 
                  fancy_2_6.innings, 
                  fancy_2_6.overs, 
                  finalMarketValueForModal
                )
              )
            } else if (isVoid) {
              dispatch(
                actions.voidFancy_2_6_SendWS(
                  ws, 
                  fancy_2_6.innings, 
                  fancy_2_6.overs
                )
              )
            }
          }

          break
        case "ir_fancy_2_10":
          if (finalMarketValueForModal<0) {
            return
          }

          if (ws.readyState === ws.OPEN) {
            if (isSettle) {
              dispatch(
                actions.settleFancy_2_10_SendWS(
                  ws, 
                  fancy_2_10.innings, 
                  fancy_2_10.overs, 
                  finalMarketValueForModal
                )
              )
            } else if (isVoid) {
              dispatch(
                actions.voidFancy_2_10_SendWS(
                  ws, 
                  fancy_2_10.innings, 
                  fancy_2_10.overs
                )
              )
            }
          }

          break
        case "ir_fancy_2_12":
          if (finalMarketValueForModal<0) {
            return
          }

          if (ws.readyState === ws.OPEN) {
            if (isSettle) {
              dispatch(
                actions.settleFancy_2_12_SendWS(
                  ws, 
                  fancy_2_12.innings, 
                  fancy_2_12.overs, 
                  finalMarketValueForModal
                )
              )
            } else if (isVoid) {
              dispatch(
                actions.voidFancy_2_12_SendWS(
                  ws, 
                  fancy_2_12.innings, 
                  fancy_2_12.overs
                )
              )
            }
          }

          break
        case "ir_fancy_2_15":
          if (finalMarketValueForModal<0) {
            return
          }

          if (ws.readyState === ws.OPEN) {
            if (isSettle) {
              dispatch(
                actions.settleFancy_2_15_SendWS(
                  ws, 
                  fancy_2_15.innings, 
                  fancy_2_15.overs, 
                  finalMarketValueForModal
                )
              )
            } else if (isVoid) {
              dispatch(
                actions.voidFancy_2_15_SendWS(
                  ws, 
                  fancy_2_15.innings, 
                  fancy_2_15.overs
                )
              )
            }
          }

          break
      }

      handleHide()
    },
  }

}

const SettleModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  (stateProps, dispatchProps, ownProps) => ({
    ...ownProps,
    ...stateProps,
    ...dispatchProps,

    settleAction() {
      dispatchProps.settleAction(
        stateProps.ws,

        stateProps.lambi,
        stateProps.fancy_1_6,
        stateProps.fancy_1_10,
        stateProps.fancy_1_12,
        stateProps.fancy_1_15,
        stateProps.fancy_2_6,
        stateProps.fancy_2_10,
        stateProps.fancy_2_12,
        stateProps.fancy_2_15,

        stateProps.finalMo,
        stateProps.finalLambi,

        stateProps.isSettle,
        stateProps.isVoid,

        stateProps.finalMarketSelectedForModal,
        stateProps.finalValue,

        dispatchProps.handleHide,
      )
    }
  })
)(SettleModal)


export default SettleModalContainer
