import { isProduction , cookieName } from '../constants'

const initialState={
	overs: 6,
    runs: 0,        
    status: "inactive",        
    team: "No team",

    finalLambi: "",
}


const lambi=(state=initialState, action)=>{
	switch(action.type){
		case "SET_LAMBI":
			const { payload } = action
			const { overs } = payload
			const { runs } = payload
			const { status } = payload
			const { team } = payload
			
			return {...state, overs:overs, runs:runs, status:status, team:team}	
			
		case "SET_FINAL_LAMBI":
			return {...state, finalLambi:payload}
		
		default:
			return state
	}
}


export default lambi