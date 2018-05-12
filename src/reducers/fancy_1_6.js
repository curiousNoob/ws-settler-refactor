import { isProduction , cookieName } from '../constants'

const initialState={
	overs: 6,
    runs: 0,        
    status: "inactive",        
    team: "No team",

    final_ir_fancy_1_6: "",

    isFancyVoided: false,
    isFancySettled: false,	
}


const fancy_1_6=(state=initialState, action)=>{
	switch(action.type){
		case "SET_FANCY_1_6":
			const { payload } = action
			const { overs } = payload
			const { runs } = payload
			const { status } = payload
			const { team } = payload

			return {...state, overs:overs, runs:runs, status:status, team:team}	
			
		case "SET_FINAL_FANCY_1_6":
			return {...state, final_ir_fancy_1_6:action.payload}
		
		default:
			return state
	}
}


export default fancy_1_6