import { isProduction , cookieName } from '../constants'

const initialState={
	finalMarketValueForModal: "",
	finalMarketSelectedForModal: "",
	marketType:"",
	isShowMarketModal: false,
	isSettle: false,
	isVoid: false,
}


const lambi=(state=initialState, action)=>{
	switch(action.type){
		case "SHOW_SETTLE_MODAL":			
			return {...state, isShowMarketModal: true}	
			
		case "HIDE_SETTLE_MODAL":
			return {...state, isShowMarketModal: false}
			
		case "RESET_SETTLE_MODAL_STATE":
			return {...state, isSettle: false, isVoid: false}

		case "SET_SETTLE_MODAL_TO_SETTLE_STATE":
			return {...state, isSettle: true, isVoid: false}

		case "SET_SETTLE_MODAL_TO_VOID_STATE":
			return {...state, isSettle: false, isVoid: true}

		case "SET_SETTLE_MODAL_FINAL_MARKET_VALUE":
			return {...state, finalMarketValueForModal:action.payload}

		case "SET_SETTLE_MODAL_FINAL_MARKET_SELECTED":
			return {...state, finalMarketSelectedForModal:action.payload}

		case "SET_MARKET_TYPE":
			return {...state, marketType: action.payload}
		
		default:
			return state
	}
}


export default lambi