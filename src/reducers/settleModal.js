import { isProduction , cookieName } from '../constants'

const initialState={
	finalMarketValueForModal: "",
	finalMarketSelectedForModal: "",
	isShowMarketModal: false,
	isSettle: false,
	isVoid: false,
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
			return {...state, finalLambi:action.payload}
		
		default:
			return state
	}
}


export default lambi