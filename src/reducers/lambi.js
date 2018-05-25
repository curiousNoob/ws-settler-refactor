import { isProduction , cookieName } from '../constants'

const initialState={
	innings:0,

	overs: 0,
    runs: 0,        
    status: "inactive",        
    team: "No team",

    finalLambi: "",

    isLambiSettled: false,      
    isLambiVoided: false,

    isShowAction:false,
}


const lambi=(state=initialState, action)=>{
	switch(action.type){
		case "SET_LAMBI":
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
					team:team,					
			}		

		case "SET_FINAL_LAMBI":
			return {...state, finalLambi:action.payload}

		case "SETTLED_LAMBI":
			return {...state, isLambiSettled:true}
		
		case "VOIDED_LAMBI":
			return {...state, isLambiVoided:true}

		case "SHOW_LAMBI_ACTION":
			return {...state, isShowAction: true}

		case "HIDE_LAMBI_ACTION":
			return {...state, isShowAction: false}
			
			
		default:
			return state
	}
}




export default lambi