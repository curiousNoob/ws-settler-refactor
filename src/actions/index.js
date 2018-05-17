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


	initSettleMatchOdds_SendWS,
	initVoidMatchOdds_SendWS,
	initSettleLambi_SendWS,
	initVoidLambi_SendWS,
	initSettleFancy_1_6_SendWS,
	initVoidFancy_1_6_SendWS,
	initSettleFancy_1_12_SendWS,
	initVoidFancy_1_12_SendWS,
	initSettleFancy_2_6_SendWS,
	initVoidFancy_2_6_SendWS,
	initSettleFancy_2_12_SendWS,
	initVoidFancy_2_12_SendWS,

	settleMatchOdds_SendWS,
	voidMatchOdds_SendWS,
	settleLambi_SendWS,
	voidLambi_SendWS,
	settleFancy_1_6_SendWS,
	voidFancy_1_6_SendWS,
	settleFancy_1_12_SendWS,
	voidFancy_1_12_SendWS,
	settleFancy_2_6_SendWS,
	voidFancy_2_6_SendWS,
	settleFancy_2_12_SendWS,
	voidFancy_2_12_SendWS,
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
	settledMatchOdds,
	voidedMatchOdds,
} from './matchOdds'

import {
	setLambi,
	settledLambi,
	voidedLambi,
} from './lambi'

import {
	setFancy_1_6,
	settledFancy_1_6,
	voidedFancy_1_6,
} from './fancy_1_6'

import {
	setFancy_1_12,
	settledFancy_1_12,
	voidedFancy_1_12,
} from './fancy_1_12'

import {
	setFancy_2_6,
	settledFancy_2_6,
	voidedFancy_2_6,
} from './fancy_2_6'

import {
	setFancy_2_12,
	settledFancy_2_12,
	voidedFancy_2_12,
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

	initSettleMatchOdds_SendWS,
	initVoidMatchOdds_SendWS,
	initSettleLambi_SendWS,
	initVoidLambi_SendWS,
	initSettleFancy_1_6_SendWS,
	initVoidFancy_1_6_SendWS,
	initSettleFancy_1_12_SendWS,
	initVoidFancy_1_12_SendWS,
	initSettleFancy_2_6_SendWS,
	initVoidFancy_2_6_SendWS,
	initSettleFancy_2_12_SendWS,
	initVoidFancy_2_12_SendWS,

	settleMatchOdds_SendWS,
	voidMatchOdds_SendWS,
	settleLambi_SendWS,
	voidLambi_SendWS,
	settleFancy_1_6_SendWS,
	voidFancy_1_6_SendWS,
	settleFancy_1_12_SendWS,
	voidFancy_1_12_SendWS,
	settleFancy_2_6_SendWS,
	voidFancy_2_6_SendWS,
	settleFancy_2_12_SendWS,
	voidFancy_2_12_SendWS,
	

	setFinalMo,
	setFinalLambi,
	setFinalFancy_1_6,
	setFinalFancy_1_12,
	setFinalFancy_2_6,
	setFinalFancy_2_12,

	setMatchOdds,
	settledMatchOdds,
	voidedMatchOdds,

	setLambi,
	settledLambi,
	voidedLambi,

	setFancy_1_6,
	settledFancy_1_6,
	voidedFancy_1_6,
	
	setFancy_1_12,
	settledFancy_1_12,
	voidedFancy_1_12,

	setFancy_2_6,
	settledFancy_2_6,
	voidedFancy_2_6,

	setFancy_2_12,
	settledFancy_2_12,
	voidedFancy_2_12,

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