import { connect } from "react-redux"


import actions from '../actions'
import SettleModal from '../components/SettleModal'



const mapStateToProps = state => {
    return {
        ws: state.socket.ws,
        
        batsmenArr:state.homeTeam.batsmenArr,
        selectedBatsmanIndexForModal:state.settleModal.finalMarketSelectedForModal,//finalMarketSelectedForModal is index now

        isSettle: state.settleModal.isSettle,
        isVoid: state.settleModal.isVoid,
        finalValue: state.settleModal.finalMarketValueForModal,
        showModal: state.settleModal.isShowMarketModal,

        marketType: `[ ${state.settleModal.finalMarketSelectedForModal} ]`,

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

            batsmenArr,
            selectedBatsmanIndexForModal,

            isSettle,
            isVoid,

            finalMarketSelectedForModal,
            finalMarketValueForModal,

            handleHide,
        ) => {
            const { 
                innings,
                batsman, 
            } = batsmenArr[selectedBatsmanIndexForModal]

            const numRuns = finalMarketValueForModal

            if (!finalMarketValueForModal) {
                return
            }

            if (ws.readyState === ws.OPEN) {
                if (isSettle) {
                    dispatch(
                        actions.settle_HomeTeamBatsman_SendWS(
                            ws,
                            innings,
                            batsman,
                            numRuns,

                            selectedBatsmanIndexForModal,
                        )
                    )
                } else if (isVoid) {
                    dispatch(
                        actions.void_HomeTeamBatsman_SendWS(
                            ws,
                            innings,
                            batsman,

                            selectedBatsmanIndexForModal,
                        )
                    )
                }
            }

            handleHide()
        },
    }

}

const BatsmanModalContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
    (stateProps, dispatchProps, ownProps) => ({
        ...ownProps,
        ...stateProps,
        ...dispatchProps,

        settleAction() {
            dispatchProps.settleAction(
                stateProps.ws,

                stateProps. batsmenArr,
                stateProps.selectedBatsmanIndexForModal,

                stateProps.isSettle,
                stateProps.isVoid,

                stateProps.finalMarketSelectedForModal,
                stateProps.finalValue,

                dispatchProps.handleHide,
            )
        }
    })
)(SettleModal)


export default BatsmanModalContainer
