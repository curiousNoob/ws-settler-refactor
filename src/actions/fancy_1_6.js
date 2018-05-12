import * as actionTypes from './actionTypes'
import { isProduction , cookieName } from '../constants'

export const setFancy_1_6 = (fancy_1_6)=>{
	return {
		type:actionTypes.SET_FANCY_1_6,
		payload:fancy_1_6,
	}
}

export const settledFancy_1_6 = ()=>{
	return {
		type:actionTypes.SETTLED_FANCY_1_6,
	}
}

export const voidedFancy_1_6 = ()=>{
	return {
		type:actionTypes.VOIDED_FANCY_1_6,
	}
}