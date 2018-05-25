import axios from 'axios'
import Cookies from "js-cookie"

import * as actionTypes from './actionTypes'
import { isProduction , cookieName } from '../constants'


export const setUsername=(username)=>{
	return {
		type:actionTypes.SET_USERNAME,
		payload:username,
	}
}

export const setPassword=(password)=>{
	return {
		type:actionTypes.SET_PASSWORD,
		payload:password,
	}
}


export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = () => {
    return {
        type: actionTypes.AUTH_SUCCESS,        
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const logout = () => {    
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export const auth = (username, password) => {
	console.log("invalid", username, password)

    return dispatch => {
    	const uri= isProduction?(window.location.origin+'/api/auth'):"http://localhost:8080/api/auth"  //"http://localhost:1984/api/auth"//when isBackendReady=false
    	//"https://cct-stage.iosport.co.uk/api/auth"//

        dispatch(authStart());

        const request = "username=" + username + "&password=" + password

        axios.post(uri, request)//make it window.location.origin or check react-parcel
	      .then(function (response) {	        
	      	dispatch(authSuccess())
	      })
	      .catch(function (error) {
	        dispatch(authFail(error))
	      });
        
    };
};

export const checkCookies=()=>{
	return {
		type:actionTypes.CHECK_COOKIES,
	}
}

export const rmCookies=()=>({
	type:actionTypes.REMOVE_COOKIES,
})




