import * as actionTypes from './actionTypes'
import { isProduction , cookieName } from '../constants'

export const setMatchOdds = (mo)=>{
	return {
		type:actionTypes.SET_MATCH_ODDS,
		payload:mo,
	}
}


export const initSettleMatchOdds_SendWS = ()=>{
	return {
		type:actionTypes.INIT_SETTLE_MATCH_ODDS_SEND_WS,
	}
}
export const initVoidMatchOdds_SendWS = ()=>{
	return {
		type:actionTypes.INIT_VOID_MATCH_ODDS_SEND_WS,
	}
}

export const settledMatchOdds = ()=>{
	return {
		type:actionTypes.SETTLED_MATCH_ODDS,
	}
}
export const voidedMatchOdds = ()=>{
	return {
		type:actionTypes.VOIDED_MATCH_ODDS,
	}
}


export const settleMatchOdds_SendWS = (ws, finalMo)=>{
	return dispatch => {
		dispatch(initSettleMatchOdds_SendWS())

		const settleMsgOverWS=JSON.stringify({ "market": "mo", "settle": finalMo })

		ws.send(settleMsgOverWS)

		dispatch(settledMatchOdds())
	}
}
export const voidMatchOdds_SendWS = (ws)=>{
	return dispatch => {
		dispatch(initVoidMatchOdds_SendWS())

		const voidMsgOverWS=JSON.stringify({"market": "mo", "void": true})

		ws.send(voidMsgOverWS)

		dispatch(voidedMatchOdds())
	}
}


export const showMatchOddsAction = () =>{
	return {
		type: actionTypes.SHOW_MATCH_ODDS_ACTION,
	}
}
export const hideMatchOddsAction = () =>{
	return {
		type: actionTypes.HIDE_MATCH_ODDS_ACTION,
	}
}