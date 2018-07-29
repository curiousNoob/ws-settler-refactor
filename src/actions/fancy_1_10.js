import * as actionTypes from './actionTypes'
import { isProduction , cookieName } from '../constants'

export const setFancy_1_10 = (fancy_1_10)=>{
	return {
		type:actionTypes.SET_FANCY_1_10,
		payload:fancy_1_10,
	}
}


export const initSettleFancy_1_10_SendWS = ()=>{
	return {
		type:actionTypes.INIT_SETTLE_FANCY_1_10_SEND_WS,
	}
}
export const initVoidFancy_1_10_SendWS = ()=>{
	return {
		type:actionTypes.INIT_VOID_FANCY_1_10_SEND_WS,
	}
}

export const settledFancy_1_10 = ()=>{
	return {
		type:actionTypes.SETTLED_FANCY_1_10,
	}
}
export const voidedFancy_1_10 = ()=>{
	return {
		type:actionTypes.VOIDED_FANCY_1_10,
	}
}

export const settleFancy_1_10_SendWS = (ws, innings, overs, numRuns)=>{
	return dispatch => {
		let err=null

		dispatch(initSettleFancy_1_10_SendWS())

		const settleMsgOverWS=JSON.stringify({"market": "ir", "innings": innings, "overs": overs, "settle": numRuns})

		try{
			ws.send(settleMsgOverWS)
		}catch(err){			
			console.error("WS FAILED WHEN SEND_WS!", err)
			throw new Error("Websocket connection failed")
		}
		

		dispatch(settledFancy_1_10())
	}
}
export const voidFancy_1_10_SendWS = (ws, innings, overs)=>{
	return dispatch => {
		dispatch(initVoidFancy_1_10_SendWS())

		const voidMsgOverWS=JSON.stringify({"market": "ir", "innings": innings, "overs": overs, "void": true})

		ws.send(voidMsgOverWS)

		dispatch(voidedFancy_1_10())
	}
}


export const showFancy_1_10_Action = () =>{
	return {
		type: actionTypes.SHOW_FANCY_1_10_ACTION,
	}
}
export const hideFancy_1_10_Action = () =>{
	return {
		type: actionTypes.HIDE_FANCY_1_10_ACTION,
	}
}
