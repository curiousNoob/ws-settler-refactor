import { isProduction , cookieName, isBackendReady } from '../constants'

const initialState={
	ws:undefined,
	isNotSuppWebSocket:false,
	webSocketErr:"",
}


const auth=(state=initialState, action)=>{
	switch(action.type){
		case "NOT_SUPPORT_WEBSOCKET":
			return {...state, isNotSuppWebSocket:true}

		case "WEBSOCKET_SUCCESS":
			console.log("WS",state.ws)
			return {...state, ws: action.payload}

		case "WEBSOCKET_ERR":
			return {...state, webSocketErr: action.payload}
			
		case "CLOSED_WEBSOCKET":
			return {...state, ws: undefined}

		default:
			return state
	}
}


export default auth