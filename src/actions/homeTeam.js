import * as actionTypes from './actionTypes'
import { isProduction , cookieName } from '../constants'


export const setHomeTeam = (homeTeamArr) => {
	return {
		type:actionTypes.SET_HOME_TEAM,
		payload: homeTeamArr,
	}
}