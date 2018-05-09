import * as actionTypes from './actionTypes'
import { isProduction , cookieName } from '../constants'


export const initSettleModal = () => {
	return {
		type:actionTypes.INIT_SETTLE_MODAL,
	}
}