import * as actionTypes from './actionTypes'
import { isProduction , cookieName } from '../constants'

export const setLambi = (lambi)=>{
	return {
		type:actionTypes.SET_LAMBI,
		payload:lambi,
	}
}