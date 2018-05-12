import * as actionTypes from './actionTypes'
import { isProduction , cookieName } from '../constants'

export const setLambi = (lambi)=>{
	return {
		type:actionTypes.SET_LAMBI,
		payload:lambi,
	}
}

export const settledLambi = ()=>{
	return {
		type:actionTypes.SETTLED_LAMBI,
	}
}

export const voidedLambi = ()=>{
	return {
		type:actionTypes.VOIDED_LAMBI,
	}
}