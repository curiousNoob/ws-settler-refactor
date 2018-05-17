import { isProduction , cookieName } from '../constants'

const initialState={
	innings:0,
	
	overs: 6,
    runs: 0,        
    status: "inactive",        
    team: "No team",

    final_ir_fancy_2_12: "",

    isFancySettled: false,
    isFancyVoided: false,
}


const fancy_2_12 = (state=initialState, action)=>{
	switch(action.type){
		case "SET_FANCY_2_12":
			const { payload } = action
			const { overs } = payload
			const { runs } = payload
			const { status } = payload
			const { team } = payload

			return {...state, overs:overs, runs:runs, status:status, team:team}	
			
		case "SET_FINAL_FANCY_2_12":
			return {...state, final_ir_fancy_2_12:action.payload}

		case "SETTLED_FANCY_2_12":
			return {...state, isFancySettled: true}

		case "VOIDED_FANCY_2_12":
			return {...state, isFancyVoided: true}
		
		default:
			return state
	}
}


export default fancy_2_12