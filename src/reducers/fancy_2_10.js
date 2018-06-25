import { isProduction , cookieName } from '../constants'

const initialState={
	innings:0,
	
	overs: 6,
    runs: 0,        
    status: "inactive",        
    team: "No team",

    final_ir_fancy: "",

    isFancySettled: false,
    isFancyVoided: false,

    isShowAction:false,
    	
}


const fancy_2_10=(state=initialState, action)=>{
	switch(action.type){
		case "SET_FANCY_2_10":
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

		case "SET_FINAL_FANCY_2_10":
			return {...state, final_ir_fancy: action.payload}
			
		case "SETTLED_FANCY_2_10":
			return {...state, isFancySettled: true}

		case "VOIDED_FANCY_2_10":
			return {...state, isFancyVoided: true}

		case "SHOW_FANCY_2_10_ACTION":
			return {...state, isShowAction: true}

		case "HIDE_FANCY_2_10_ACTION":
			return {...state, isShowAction: false}

		
		default:
			return state
	}
}

export default fancy_2_10