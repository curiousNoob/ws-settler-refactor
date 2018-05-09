import * as actionTypes from './actionTypes'
import { isProduction , cookieName } from '../constants'

export const setFancy_1_12 = (fancy_1_12)=>{
	return {
		type:actionTypes.SET_FANCY_1_12,
		payload:fancy_1_12,
	}
}