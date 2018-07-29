import * as actionTypes from './actionTypes'
import { isProduction , cookieName } from '../constants'

export const setFancy_1_15 = (fancy_1_15)=>{
	return {
		type:actionTypes.SET_FANCY_1_15,
		payload:fancy_1_15,
	}
}


export const initSettleFancy_1_15_SendWS = ()=>{
	return {
		type:actionTypes.INIT_SETTLE_FANCY_1_15_SEND_WS,
	}
}
export const initVoidFancy_1_15_SendWS = ()=>{
	return {
		type:actionTypes.INIT_VOID_FANCY_1_15_SEND_WS,
	}
}

export const settledFancy_1_15 = ()=>{
	return {
		type:actionTypes.SETTLED_FANCY_1_15,
	}
}
export const voidedFancy_1_15 = ()=>{
	return {
		type:actionTypes.VOIDED_FANCY_1_15,
	}
}

export const settleFancy_1_15_SendWS = (ws, innings, overs, numRuns)=>{
	return dispatch => {
		dispatch(initSettleFancy_1_15_SendWS())

		const settleMsgOverWS=JSON.stringify({"market": "ir", "innings": innings, "overs": overs, "settle": numRuns})

		ws.send(settleMsgOverWS)

		dispatch(settledFancy_1_15())
	}
}
export const voidFancy_1_15_SendWS = (ws, innings, overs)=>{
	return dispatch => {
		dispatch(initVoidFancy_1_15_SendWS())

		const voidMsgOverWS=JSON.stringify({"market": "ir", "innings": innings, "overs": overs, "void": true})

		ws.send(voidMsgOverWS)

		dispatch(voidedFancy_1_15())
	}
}


export const showFancy_1_15_Action = () =>{
	return {
		type: actionTypes.SHOW_FANCY_1_15_ACTION,
	}
}
export const hideFancy_1_15_Action = () =>{
	return {
		type: actionTypes.HIDE_FANCY_1_15_ACTION,
	}
}

//if status is inactive put action btn default back(s/v)
export const resetActionBtn_Fancy_1_15=()=>{
	return {
		type: actionTypes.RESET_ACTION_BTN_FANCY_1_15
	}
}
