import * as actionTypes from './actionTypes'
import { isProduction , cookieName } from '../constants'

export const setFancy_2_12 = (fancy_2_12)=>{
	return {
		type:actionTypes.SET_FANCY_2_12,
		payload:fancy_2_12,
	}
}