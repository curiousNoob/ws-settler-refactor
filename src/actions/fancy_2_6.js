import * as actionTypes from './actionTypes'
import { isProduction , cookieName } from '../constants'

export const setFancy_2_6 = (fancy_2_6)=>{
	return {
		type:actionTypes.SET_FANCY_2_6,
		payload:fancy_2_6,
	}
}