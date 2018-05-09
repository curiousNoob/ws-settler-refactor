import { isProduction , cookieName } from '../constants'

const initialState={
	status:"inactive",
	winner:"",

	finalMo:"",	
}


const matchOdds=(state=initialState, action)=>{
	

	switch(action.type){
		case "SET_MATCH_ODDS":
			const { payload } = action
			const { status } = payload
			const { winner } = payload
			
			return {...state, status:status, winner:winner}	

		case "SET_FINAL_MO":
			return {...state, finalMo:payload}		
		
		default:
			return state
	}
}


export default matchOdds