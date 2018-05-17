import * as actionTypes from './actionTypes'
import { isProduction , cookieName } from '../constants'

export const setFancy_1_12 = (fancy_1_12)=>{
	return {
		type:actionTypes.SET_FANCY_1_12,
		payload:fancy_1_12,
	}
}

export const settledFancy_1_12 = ()=>{
	return {
		type:actionTypes.SETTLED_FANCY_1_12,
	}
}

export const voidedFancy_1_12 = ()=>{
	return {
		type:actionTypes.VOIDED_FANCY_1_12,
	}
}