import * as actionTypes from './actionTypes'
import { isProduction , cookieName } from '../constants'

export const setHome=(home)=>{
	return {
		type:actionTypes.SET_HOME,
		payload:home,
	}
}

export const setAway=(away)=>{
	return {
		type:actionTypes.SET_AWAY,
		payload:away,
	}
}

export const setAppInfo=(appinfo)=>{
	return {
		type:actionTypes.SET_APP_INFO,
		payload:appinfo,
	}
}

export const setName=(name)=>{
	return {
		type:actionTypes.SET_NAME,
		payload:name,
	}
}