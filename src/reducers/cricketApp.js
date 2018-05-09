import { isProduction , cookieName } from '../constants'

const initialState={
	home:"",
	away:"",
	appinfo:"",
	name:"",
}


const cricketApp=(state=initialState, action)=>{
	switch(action.type){
		case "SET_HOME":
			return {...state, home:action.payload}

		case "SET_AWAY":
			return {...state, away:action.payload}

		case "SET_APP_INFO":
			return {...state, appinfo: action.payload}
			
		case "SET_NAME":
			state.ws.close()//close websocket, in reducer
			return {...state, name: action.payload}

		default:
			return state
	}
}


export default cricketApp