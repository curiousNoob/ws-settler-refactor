import { isProduction , cookieName } from '../constants'

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
			return {...state, ws: action.payload}

		case "WEBSOCKET_ERR":
			return {...state, webSocketErr: action.payload}
			
		case "CLOSE_WEBSOCKET":
			state.ws.close()//close websocket, in reducer
			return {...state, ws: undefined}

		default:
			return state
	}
}


export default auth