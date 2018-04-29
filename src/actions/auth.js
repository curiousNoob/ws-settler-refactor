import axios from 'axios'

import * as actionTypes from './actionTypes'


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

export const auth = (email, password) => {
    return dispatch => {
    	const uri= isProduction?(window.location.origin+'/api/auth'):"https://cct-stage.iosport.co.uk/api/auth"    					

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

