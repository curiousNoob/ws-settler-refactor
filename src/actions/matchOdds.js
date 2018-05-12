import * as actionTypes from './actionTypes'
import { isProduction , cookieName } from '../constants'

export const setMatchOdds = (mo)=>{
	return {
		type:actionTypes.SET_MATCH_ODDS,
		payload:mo,
	}
}

export const settledMatchOdds = ()=>{
	return {
		type:actionTypes.SETTLED_MATCH_ODDS,
	}
}

export const voidedMatchOdds = ()=>{
	return {
		type:actionTypes.SETTLED_MATCH_ODDS,
	}
}