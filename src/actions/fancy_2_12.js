import * as actionTypes from './actionTypes'
import { isProduction , cookieName } from '../constants'

export const setFancy_2_12 = (fancy_2_12)=>{
	return {
		type:actionTypes.SET_FANCY_2_12,
		payload:fancy_2_12,
	}
}

export const settledFancy_2_12 = ()=>{
	return {
		type:actionTypes.SETTLED_FANCY_2_12,
	}
}

export const voidedFancy_2_12 = ()=>{
	return {
		type:actionTypes.VOIDED_FANCY_2_12,
	}
}