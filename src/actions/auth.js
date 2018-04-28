import * as actionTypes from './actionTypes'

export const set_username=(username)=>{
	return {
		type:actionTypes.SET_USERNAME,
		payload:username,
	}
}

export const login_start =()=>{
	return {
		type:actionTypes.LOG_IN_START,
	}
}
 

