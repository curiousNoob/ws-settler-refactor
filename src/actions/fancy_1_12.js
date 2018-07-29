import * as actionTypes from './actionTypes'
import { isProduction , cookieName } from '../constants'

export const setFancy_1_12 = (fancy_1_12)=>{
	return {
		type:actionTypes.SET_FANCY_1_12,
		payload:fancy_1_12,
	}
}


export const initSettleFancy_1_12_SendWS = ()=>{
	return {
		type:actionTypes.INIT_SETTLE_FANCY_1_12_SEND_WS,
	}
}
export const initVoidFancy_1_12_SendWS = ()=>{
	return {
		type:actionTypes.INIT_VOID_FANCY_1_12_SEND_WS,
	}
}

export const settledFancy_1_12 = ()=>{
	return {
		type:actionTypes.SETTLED_FANCY_1_12,
	}
}
export const voidedFancy_1_12 = ()=>{
	return {
		type:actionTypes.VOIDED_FANCY_1_12,
	}
}


export const settleFancy_1_12_SendWS = (ws, innings, overs, numRuns)=>{
	return dispatch => {
		dispatch(initSettleFancy_1_12_SendWS())

		const settleMsgOverWS=JSON.stringify({"market": "ir", "innings": innings, "overs": overs, "settle": numRuns})

		ws.send(settleMsgOverWS)

		dispatch(settledFancy_1_12())
	}
}
export const voidFancy_1_12_SendWS= (ws, innings, overs)=>{
	return dispatch => {
		dispatch(initVoidFancy_1_12_SendWS())

		const voidMsgOverWS=JSON.stringify({"market": "ir", "innings": innings, "overs": overs, "void": true})

		ws.send(voidMsgOverWS)

		dispatch(voidedFancy_1_12())
	}
}


export const showFancy_1_12_Action = () =>{
	return {
		type: actionTypes.SHOW_FANCY_1_12_ACTION,
	}
}
export const hideFancy_1_12_Action = () =>{
	return {
		type: actionTypes.HIDE_FANCY_1_12_ACTION,
	}
}

//if status is inactive put action btn default back(s/v)
export const resetActionBtn_Fancy_1_12=()=>{
	return {
		type: actionTypes.RESET_ACTION_BTN_FANCY_1_12
	}
}