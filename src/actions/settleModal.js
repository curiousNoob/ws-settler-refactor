import * as actionTypes from './actionTypes'
import { isProduction , cookieName } from '../constants'


export const initSettleModal = () => {
	return {
		type:actionTypes.INIT_SETTLE_MODAL,
	}
}

export const showSettleModal = () => {
	return {
		type:actionTypes.SHOW_SETTLE_MODAL,
	}
}

export const hideSettleModal = () => {
	return {
		type:actionTypes.HIDE_SETTLE_MODAL,
	}
}

export const resetSettleModal = () => {
	return {
		type:actionTypes.RESET_SETTLE_MODAL_STATE,
	}
}

export const setSettleModalToSettleState = () => {
	return {
		type:actionTypes.SET_SETTLE_MODAL_TO_SETTLE_STATE,
	}
}

export const setSettleModalToVoidState = () => {
	return {
		type:actionTypes.SET_SETTLE_MODAL_TO_VOID_STATE,
	}
}

export const setSettleModalFinalValue = (finalValue) => {
	return {
		type:actionTypes.SET_SETTLE_MODAL_FINAL_MARKET_VALUE,
		payload: finalValue,
	}
}

export const setSettleModalFinalMarketSelected = (marketTypeSelected) => {
	return {
		type:actionTypes.SET_SETTLE_MODAL_FINAL_MARKET_SELECTED,
		payload: marketTypeSelected,		
	}
}