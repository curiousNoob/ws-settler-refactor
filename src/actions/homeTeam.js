import * as actionTypes from './actionTypes'
import { isProduction , cookieName } from '../constants'


export const setHomeTeam = (homeTeamArr) => {
	return {
		type:actionTypes.SET_HOME_TEAM,
		payload: homeTeamArr,
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

export const setFinalHomeTeamBatsmanValue = (finalValue, indexBatsman) => {
	return {
		type:actionTypes.SET_FINAL_HOME_TEAM_BATSMAN_VALUE,
		payload: {
			finalValue,
			indexBatsman,
		},
	}
}



