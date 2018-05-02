import Cookies from "js-cookie";

import { isProduction , cookieName } from '../constants'

import * as actionTypes from '../actions/actionTypes';

const initialState={
	username:"",
	password:"",
	isLoggedIn:false,
	isLoading:false,
	isLogInError:false,	
}


const auth=(state=initialState, action)=>{
	switch(action.type){
		case "SET_USERNAME":
			return {...state, username:action.payload}
		case "SET_PASSWORD":
			return {...state, password:action.payload}
		case "AUTH_START":
			return {...state, isLoading:true}
		case "AUTH_SUCCESS":
			return {...state, isLoggedIn:true}
		case "AUTH_FAIL":
			return {...state, isLogInError:true}
		case "AUTH_LOGOUT":
			return {...state, isLoggedIn:false}
		case "CHECK_COOKIES":
			const cookie = Cookies.get(cookieName)
			
			if (isProduction) {
		      if (cookie !== undefined) {
		        return {...state, isLoggedIn:true}
		      }
		    }
			return state
		case "REMOVE_COOKIES":
			if (isProduction) {
		      Cookies.remove(cookieName);
		    }
			return {...state, isLoggedIn:false}
		default:
			return state
	}
}


export default auth