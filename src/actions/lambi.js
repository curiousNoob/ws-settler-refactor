import * as actionTypes from './actionTypes'
import { isProduction , cookieName } from '../constants'

export const setLambi = (lambi)=>{
	return {
		type:actionTypes.SET_LAMBI,
		payload:lambi,
	}
}


export const initSettleLambi_SendWS = ()=>{
	return {
		type:actionTypes.INIT_SETTLE_LAMBI_SEND_WS,
	}
}
export const initVoidLambi_SendWS = ()=>{
	return {
		type:actionTypes.INIT_VOID_LAMBI_SEND_WS,
	}
}

export const settledLambi = ()=>{
	return {
		type:actionTypes.SETTLED_LAMBI,
	}
}
export const voidedLambi = ()=>{
	return {
		type:actionTypes.VOIDED_LAMBI,
	}
}


export const settleLambi_SendWS = (ws, innings, overs, numRuns)=>{
	return dispatch => {
		dispatch(initSettleLambi_SendWS())

		const settleMsgOverWS=JSON.stringify({"market": "ir", "innings": innings, "overs": overs, "settle": numRuns})

		ws.send(settleMsgOverWS)

		dispatch(settledLambi())
	}
}
export const voidLambi_SendWS = (ws, innings, overs)=>{
	return dispatch => {
		dispatch(initVoidLambi_SendWS())

		const voidMsgOverWS=JSON.stringify({"market": "ir", "innings": innings, "overs": overs, "void": true})

		ws.send(voidMsgOverWS)

		dispatch(voidedLambi())
	}
}


export const showLambiAction = () =>{
	return {
		type: actionTypes.SHOW_LAMBI_ACTION,
	}
}
export const hideLambiAction = () =>{
	return {
		type: actionTypes.HIDE_LAMBI_ACTION,
	}
}