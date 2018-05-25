import * as actionTypes from './actionTypes'
import { isProduction , cookieName } from '../constants'

export const setFancy_2_6 = (fancy_2_6)=>{
	return {
		type:actionTypes.SET_FANCY_2_6,
		payload:fancy_2_6,
	}
}


export const initSettleFancy_2_6_SendWS = ()=>{
	return {
		type:actionTypes.INIT_SETTLE_FANCY_2_6_SEND_WS,
	}
}
export const initVoidFancy_2_6_SendWS = ()=>{
	return {
		type:actionTypes.INIT_VOID_FANCY_2_6_SEND_WS,
	}
}

export const settledFancy_2_6 = ()=>{
	return {
		type:actionTypes.SETTLED_FANCY_2_6,
	}
}
export const voidedFancy_2_6 = ()=>{
	return {
		type:actionTypes.VOIDED_FANCY_2_6,
	}
}


export const settleFancy_2_6_SendWS = (ws, innings, overs, numRuns)=>{
	return dispatch => {
		dispatch(initSettleFancy_2_6_SendWS())

		const settleMsgOverWS=JSON.stringify({"market": "ir", "innings": innings, "overs": overs, "settle": numRuns})

		ws.send(settleMsgOverWS)

		dispatch(settledFancy_2_6())
	}
}
export const voidFancy_2_6_SendWS = (ws, innings, overs)=>{
	return dispatch => {
		dispatch(initVoidFancy_2_6_SendWS())

		const voidMsgOverWS=JSON.stringify({"market": "ir", "innings": innings, "overs": overs, "void": true})

		ws.send(voidMsgOverWS)

		dispatch(voidedFancy_2_6())
	}
}


export const showFancy_2_6_Action = () =>{
	return {
		type: actionTypes.SHOW_FANCY_2_6_ACTION,
	}
}
export const hideFancy_2_6_Action = () =>{
	return {
		type: actionTypes.HIDE_FANCY_2_6_ACTION,
	}
}