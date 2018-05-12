import { isProduction , cookieName } from '../constants'

const initialState={
	overs: 6,
    runs: 0,        
    status: "inactive",        
    team: "No team",

    finalLambi: "",

    isLambiSettled: false,      
    isLambiVoided: false,
}


const lambi=(state=initialState, action)=>{
	switch(action.type){
		case "SET_LAMBI":
			const { payload } = action
			const { overs } = payload
			const { runs } = payload
			const { status } = payload
			const { team } = payload
			
			return {
					...state,
					 
					overs:overs, 
					runs:runs, 
					status:status, 
					team:team,

					
			}		

		case "SET_FINAL_LAMBI":
			return {...state, finalLambi:action.payload}

		case "SETTLED_LAMBI":
			return {...state, isLambiSettled:true}
		
		case "VOIDED_LAMBI":
			return {...state, isLambiVoided:true}
			
		default:
			return state
	}
}


export default lambi