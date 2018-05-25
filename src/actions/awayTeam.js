import * as actionTypes from './actionTypes'
import { isProduction , cookieName } from '../constants'


export const setAwayTeam = (awayTeamArr) => {
	return {
		type:actionTypes.SET_AWAY_TEAM,
		payload: awayTeamArr,
	}
}