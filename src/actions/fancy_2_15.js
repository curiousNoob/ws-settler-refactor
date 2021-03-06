import * as actionTypes from './actionTypes'
import { isProduction , cookieName } from '../constants'

export const setFancy_2_15 = (fancy_2_15)=>{
	return {
		type:actionTypes.SET_FANCY_2_15,
		payload:fancy_2_15,
	}
}


export const initSettleFancy_2_15_SendWS = ()=>{
	return {
		type:actionTypes.INIT_SETTLE_FANCY_2_15_SEND_WS,
	}
}
export const initVoidFancy_2_15_SendWS = ()=>{
	return {
		type:actionTypes.INIT_VOID_FANCY_2_15_SEND_WS,
	}
}

export const settledFancy_2_15 = ()=>{
	return {
		type:actionTypes.SETTLED_FANCY_2_15,
	}
}
export const voidedFancy_2_15 = ()=>{
	return {
		type:actionTypes.VOIDED_FANCY_2_15,
	}
}

export const settleFancy_2_15_SendWS = (ws, innings, overs, numRuns)=>{
	return dispatch => {
		dispatch(initSettleFancy_2_15_SendWS())

		const settleMsgOverWS=JSON.stringify({"market": "ir", "innings": innings, "overs": overs, "settle": numRuns})

		ws.send(settleMsgOverWS)

		dispatch(settledFancy_2_15())
	}
}
export const voidFancy_2_15_SendWS = (ws, innings, overs)=>{
	return dispatch => {
		dispatch(initVoidFancy_2_15_SendWS())

		const voidMsgOverWS=JSON.stringify({"market": "ir", "innings": innings, "overs": overs, "void": true})

		ws.send(voidMsgOverWS)

		dispatch(voidedFancy_2_15())
	}
}


export const showFancy_2_15_Action = () =>{
	return {
		type: actionTypes.SHOW_FANCY_2_15_ACTION,
	}
}
export const hideFancy_2_15_Action = () =>{
	return {
		type: actionTypes.HIDE_FANCY_2_15_ACTION,
	}
}

//if status is inactive put action btn default back(s/v)
export const resetActionBtn_Fancy_2_15=()=>{
	return {
		type: actionTypes.RESET_ACTION_BTN_FANCY_2_15
	}
}