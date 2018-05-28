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