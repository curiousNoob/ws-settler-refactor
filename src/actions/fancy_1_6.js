import * as actionTypes from './actionTypes'
import { isProduction , cookieName } from '../constants'

export const setFancy_1_6 = (fancy_1_6)=>{
	return {
		type:actionTypes.SET_FANCY_1_6,
		payload:fancy_1_6,
	}
}


export const initSettleFancy_1_6_SendWS = ()=>{
	return {
		type:actionTypes.INIT_SETTLE_FANCY_1_6_SEND_WS,
	}
}
export const initVoidFancy_1_6_SendWS = ()=>{
	return {
		type:actionTypes.INIT_VOID_FANCY_1_6_SEND_WS,
	}
}

export const settledFancy_1_6 = ()=>{
	return {
		type:actionTypes.SETTLED_FANCY_1_6,
	}
}
export const voidedFancy_1_6 = ()=>{
	return {
		type:actionTypes.VOIDED_FANCY_1_6,
	}
}

export const settleFancy_1_6_SendWS = (ws, innings, overs, numRuns)=>{
	return dispatch => {
		dispatch(initSettleFancy_1_6_SendWS())

		const settleMsgOverWS=JSON.stringify({"market": "ir", "innings": innings, "overs": overs, "settle": numRuns})

		ws.send(settleMsgOverWS)

		dispatch(settledFancy_1_6())
	}
}
export const voidFancy_1_6_SendWS = (ws, innings, overs)=>{
	return dispatch => {
		dispatch(initVoidFancy_1_6_SendWS())

		const voidMsgOverWS=JSON.stringify({"market": "ir", "innings": innings, "overs": overs, "void": true})

		ws.send(voidMsgOverWS)

		dispatch(voidedFancy_1_6())
	}
}