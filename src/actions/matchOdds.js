import * as actionTypes from './actionTypes'
import { isProduction , cookieName } from '../constants'

export const setMatchOdds = (mo)=>{
	return {
		type:actionTypes.SET_MATCH_ODDS,
		payload:mo,
	}
}