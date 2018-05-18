import { 
	setUsername,
	setPassword,

	auth,
	authStart,
	authSuccess,
	authFail,
	logout,
	checkCookies,
	rmCookies,
} from './auth'

import {
	openWebSocket,
	closeWebsocket,
	checkWebSocketExist,
	notSuppWebSocket,
	websocketConnectedSuccess,
	websocketConnectedErr,
	establishWebSocketConnection,
} from './socket'

import {
	setFinalMo,
	setFinalLambi,
	setFinalFancy_1_6,
	setFinalFancy_1_12,
	setFinalFancy_2_6,
	setFinalFancy_2_12,
} from './finalMarketValues'

import {
	setMatchOdds,
	initSettleMatchOdds_SendWS,
	initVoidMatchOdds_SendWS,
	settledMatchOdds,
	voidedMatchOdds,
	settleMatchOdds_SendWS,
	voidMatchOdds_SendWS,
} from './matchOdds'

import {
	setLambi,
	initSettleLambi_SendWS,
	initVoidLambi_SendWS,
	settledLambi,
	voidedLambi,
	settleLambi_SendWS,
	voidLambi_SendWS,
} from './lambi'

import {
	setFancy_1_6,
	initSettleFancy_1_6_SendWS,
	initVoidFancy_1_6_SendWS,
	settledFancy_1_6,
	voidedFancy_1_6,
	settleFancy_1_6_SendWS,
	voidFancy_1_6_SendWS,
} from './fancy_1_6'

import {
	setFancy_1_12,
	initSettleFancy_1_12_SendWS,
	initVoidFancy_1_12_SendWS,
	settledFancy_1_12,
	voidedFancy_1_12,
	settleFancy_1_12_SendWS,
	voidFancy_1_12_SendWS,
} from './fancy_1_12'

import {
	setFancy_2_6,
	initSettleFancy_2_6_SendWS,
	initVoidFancy_2_6_SendWS,
	settledFancy_2_6,
	voidedFancy_2_6,
	settleFancy_2_6_SendWS,
	voidFancy_2_6_SendWS,
} from './fancy_2_6'

import {
	setFancy_2_12,
	initSettleFancy_2_12_SendWS,
	initVoidFancy_2_12_SendWS,
	settledFancy_2_12,
	voidedFancy_2_12,
	settleFancy_2_12_SendWS,
	voidFancy_2_12_SendWS,
} from './fancy_2_12'

import {
	initSettleModal,
	showSettleModal,
	hideSettleModal,
	resetSettleModal,
	setSettleModalToSettleState,
	setSettleModalToVoidState,
	setSettleModalFinalMarketValue,
	setSettleModalFinalMarketSelected,
} from './settleModal'
	

const actions={
	setUsername,
	setPassword,

	auth,
	authStart,
	authSuccess,
	authFail,
	logout,
	checkCookies,
	rmCookies,
	
	openWebSocket,	
	closeWebsocket,
	checkWebSocketExist,
	notSuppWebSocket,
	websocketConnectedSuccess,
	websocketConnectedErr,
	establishWebSocketConnection,	

	setFinalMo,
	setFinalLambi,
	setFinalFancy_1_6,
	setFinalFancy_1_12,
	setFinalFancy_2_6,
	setFinalFancy_2_12,

	setMatchOdds,
	initSettleMatchOdds_SendWS,
	initVoidMatchOdds_SendWS,
	settledMatchOdds,
	voidedMatchOdds,
	settleMatchOdds_SendWS,
	voidMatchOdds_SendWS,

	setLambi,
	initSettleLambi_SendWS,
	initVoidLambi_SendWS,
	settledLambi,
	voidedLambi,
	settleLambi_SendWS,
	voidLambi_SendWS,

	setFancy_1_6,
	initSettleFancy_1_6_SendWS,
	initVoidFancy_1_6_SendWS,
	settledFancy_1_6,
	voidedFancy_1_6,
	settleFancy_1_6_SendWS,
	voidFancy_1_6_SendWS,
	
	setFancy_1_12,
	initSettleFancy_1_12_SendWS,
	initVoidFancy_1_12_SendWS,
	settledFancy_1_12,
	voidedFancy_1_12,
	settleFancy_1_12_SendWS,
	voidFancy_1_12_SendWS,

	setFancy_2_6,
	initSettleFancy_2_6_SendWS,
	initVoidFancy_2_6_SendWS,
	settledFancy_2_6,
	voidedFancy_2_6,
	settleFancy_2_6_SendWS,
	voidFancy_2_6_SendWS,

	setFancy_2_12,
	initSettleFancy_2_12_SendWS,
	initVoidFancy_2_12_SendWS,
	settledFancy_2_12,
	voidedFancy_2_12,
	settleFancy_2_12_SendWS,
	voidFancy_2_12_SendWS,

	initSettleModal,
	showSettleModal,
	hideSettleModal,
	resetSettleModal,
	setSettleModalToSettleState,
	setSettleModalToVoidState,
	setSettleModalFinalMarketValue,
	setSettleModalFinalMarketSelected,

}


export  default  actions