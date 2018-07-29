import { isProduction , cookieName } from '../constants'

const initialState={
	status:"inactive",
	winner:"No winner yet",

	finalMo:"",

	isMatchOddsSettled: false,      
    isMatchOddsVoided: false,

    isShowAction:false,
}


const matchOdds=(state=initialState, action)=>{
	switch(action.type){
		case "SET_MATCH_ODDS":
			const { payload } = action
			const { status } = payload
			const { winner } = payload
			
			return {
					...state,
					 
					status:status, 
					winner:winner,
			}	

		case "SET_FINAL_MO":
			return {...state, finalMo:action.payload}

		case "SETTLED_MATCH_ODDS":
			return {...state, isMatchOddsSettled: true}

		case "VOIDED_MATCH_ODDS":
			return {...state, isMatchOddsVoided: true}

		case "SHOW_MATCH_ODDS_ACTION":
			return {...state, isShowAction: true}

		case "HIDE_MATCH_ODDS_ACTION":
			return {...state, isShowAction: false}

		case "RESET_ACTION_BTN_MATCHODDS":
			return {
						...state,
						
						isMatchOddsSettled: false,      
    					isMatchOddsVoided: false, 
					}
			
		
		default:
			return state
	}
}


export default matchOdds

