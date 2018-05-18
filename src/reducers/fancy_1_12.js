import { isProduction , cookieName } from '../constants'

const initialState={
	innings:0,
	
	overs: 6,
    runs: 0,        
    status: "inactive",        
    team: "No team",

    final_ir_fancy_1_12: "",

    isFancySettled: false,
    isFancyVoided: false,
}


const fancy_1_12=(state=initialState, action)=>{
	switch(action.type){
		case "SET_FANCY_1_12":
			const { payload } = action
			
			const { innings } = payload
			const { overs } = payload
			const { runs } = payload
			const { status } = payload
			const { team } = payload

			return {
					...state,

					innings:innings,
					overs:overs, 
					runs:runs, 
					status:status, 
					team:team
			}
			
		case "SET_FINAL_FANCY_1_12":
			return {...state, final_ir_fancy_1_12:action.payload}

		case "SETTLED_FANCY_1_12":
			return {...state, isFancySettled: true}

		case "VOIDED_FANCY_1_12":
			return {...state, isFancyVoided: true}
		
		default:
			return state
	}
}


export default fancy_1_12