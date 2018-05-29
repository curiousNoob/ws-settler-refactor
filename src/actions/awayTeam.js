import * as actionTypes from './actionTypes'
import { isProduction , cookieName } from '../constants'


export const setAwayTeam = (awayTeamArr) => {
	return {
		type:actionTypes.SET_AWAY_TEAM,
		payload: awayTeamArr,
	}
}

export const showAwayTeamBatsmanAction = (index) => {
	return {
		type:actionTypes.SHOW_AWAY_TEAM_BATSMAN_ACTION,
		payload: index,
	}
}

export const hideAwayTeamBatsmanAction = (index) => {
	return {
		type:actionTypes.HIDE_AWAY_TEAM_BATSMAN_ACTION,
		payload: index,
	}
}

export const setFinalAwayTeamBatsmanValue = (finalValue, batsmanIndex) => {
	return {
		type:actionTypes.SET_FINAL_AWAY_TEAM_BATSMAN_VALUE,
		payload: {
			finalValue,
			batsmanIndex,
		},
	}
}

export const setAwayTeamSelectedBatsmanIndex = (selectedBatsmanIndex)=>{
	return {
		type:actionTypes.SET_AWAY_TEAM_SELECTED_BATSMAN_INDEX,
		payload: selectedBatsmanIndex,
	}
}


export const initSettle_AwayTeamBatsman_SendWS = ()=>{
	return {
		type:actionTypes.INIT_SETTLE_AWAY_TEAM_BATSMAN_SEND_WS,
	}
}
export const initVoid_AwayTeamBatsman_SendWS = ()=>{
	return {
		type:actionTypes.INIT_VOID_AWAY_TEAM_BATSMAN_SEND_WS,
	}
}

export const settled_AwayTeamBatsman = (selectedBatsmanIndex)=>{
	return {
		type:actionTypes.SETTLED_AWAY_TEAM_BATSMAN,
		payload: selectedBatsmanIndex,
	}
}
export const voided_AwayTeamBatsman = (selectedBatsmanIndex)=>{
	return {
		type:actionTypes.VOIDED_AWAY_TEAM_BATSMAN,
		payload: selectedBatsmanIndex,		
	}
}


export const settle_AwayTeamBatsman_SendWS = (ws, innings, batsman, numRuns, selectedBatsmanIndex)=>{
	return dispatch => {
		dispatch(setAwayTeamSelectedBatsmanIndex(selectedBatsmanIndex))
		
		dispatch(initSettle_AwayTeamBatsman_SendWS())

		const settleMsgOverWS=JSON.stringify(
			{"market": "batsmen", "innings": innings, "batsman": batsman, "settle": numRuns}
		)

		ws.send(settleMsgOverWS)

		dispatch(settled_AwayTeamBatsman(selectedBatsmanIndex))
	}
}
export const void_AwayTeamBatsman_SendWS = (ws, innings, batsman, selectedBatsmanIndex)=>{
	return dispatch => {
		dispatch(setAwayTeamSelectedBatsmanIndex(selectedBatsmanIndex))

		dispatch(initVoid_AwayTeamBatsman_SendWS())

		const voidMsgOverWS=JSON.stringify(
			{"market": "batsmen", "innings": innings, "batsman": batsman, "void": true}
		)

		ws.send(voidMsgOverWS)

		dispatch(voided_AwayTeamBatsman(selectedBatsmanIndex))
	}
}