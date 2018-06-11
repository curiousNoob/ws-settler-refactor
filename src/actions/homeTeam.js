import * as actionTypes from './actionTypes'
import { isProduction , cookieName } from '../constants'


export const setHomeTeam = (homeTeamArr) => {
	return {
		type:actionTypes.SET_HOME_TEAM,
		payload: homeTeamArr,
	}
}

export const initHomeTeamUIstate = () => {
	return {
		type:actionTypes.INIT_HOME_TEAM_UI_STATE,
	}
}

export const showHomeTeamBatsmanAction = (index) => {
	return {
		type:actionTypes.SHOW_HOME_TEAM_BATSMAN_ACTION,
		payload: index,
	}
}

export const hideHomeTeamBatsmanAction = (index) => {
	return {
		type:actionTypes.HIDE_HOME_TEAM_BATSMAN_ACTION,
		payload: index,
	}
}

export const setFinalHomeTeamBatsmanValue = (finalValue, batsmanIndex) => {
	return {
		type:actionTypes.SET_FINAL_HOME_TEAM_BATSMAN_VALUE,
		payload: {
			finalValue,
			batsmanIndex,
		},
	}
}

export const setHomeTeamSelectedBatsmanIndex = (selectedBatsmanIndex)=>{
	return {
		type:actionTypes.SET_HOME_TEAM_SELECTED_BATSMAN_INDEX,
		payload: selectedBatsmanIndex,
	}
}


export const initSettle_HomeTeamBatsman_SendWS = ()=>{
	return {
		type:actionTypes.INIT_SETTLE_HOME_TEAM_BATSMAN_SEND_WS,
	}
}
export const initVoid_HomeTeamBatsman_SendWS = ()=>{
	return {
		type:actionTypes.INIT_VOID_HOME_TEAM_BATSMAN_SEND_WS,
	}
}

export const settled_HomeTeamBatsman = (selectedBatsmanIndex)=>{
	return {
		type:actionTypes.SETTLED_HOME_TEAM_BATSMAN,
		payload: selectedBatsmanIndex,
	}
}
export const voided_HomeTeamBatsman = (selectedBatsmanIndex)=>{
	return {
		type:actionTypes.VOIDED_HOME_TEAM_BATSMAN,
		payload: selectedBatsmanIndex,		
	}
}


export const settle_HomeTeamBatsman_SendWS = (ws, innings, batsman, numRuns, selectedBatsmanIndex)=>{
	return dispatch => {
		dispatch(setHomeTeamSelectedBatsmanIndex(selectedBatsmanIndex))
		
		dispatch(initSettle_HomeTeamBatsman_SendWS())

		const settleMsgOverWS=JSON.stringify(
			{"market": "batsmen", "innings": innings, "batsman": batsman, "settle": numRuns}
		)

		ws.send(settleMsgOverWS)

		dispatch(settled_HomeTeamBatsman(selectedBatsmanIndex))
	}
}
export const void_HomeTeamBatsman_SendWS = (ws, innings, batsman, selectedBatsmanIndex)=>{
	return dispatch => {
		dispatch(setHomeTeamSelectedBatsmanIndex(selectedBatsmanIndex))

		dispatch(initVoid_HomeTeamBatsman_SendWS())

		const voidMsgOverWS=JSON.stringify(
			{"market": "batsmen", "innings": innings, "batsman": batsman, "void": true}
		)

		ws.send(voidMsgOverWS)

		dispatch(voided_HomeTeamBatsman(selectedBatsmanIndex))
	}
}



