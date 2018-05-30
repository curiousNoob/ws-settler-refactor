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
	showMatchOddsAction,
	hideMatchOddsAction,
} from './matchOdds'

import {
	setLambi,
	initSettleLambi_SendWS,
	initVoidLambi_SendWS,
	settledLambi,
	voidedLambi,
	settleLambi_SendWS,
	voidLambi_SendWS,
	showLambiAction,
	hideLambiAction,
} from './lambi'

import {
	setFancy_1_6,
	initSettleFancy_1_6_SendWS,
	initVoidFancy_1_6_SendWS,
	settledFancy_1_6,
	voidedFancy_1_6,
	settleFancy_1_6_SendWS,
	voidFancy_1_6_SendWS,
	showFancy_1_6_Action,
	hideFancy_1_6_Action,
} from './fancy_1_6'

import {
	setFancy_1_12,
	initSettleFancy_1_12_SendWS,
	initVoidFancy_1_12_SendWS,
	settledFancy_1_12,
	voidedFancy_1_12,
	settleFancy_1_12_SendWS,
	voidFancy_1_12_SendWS,
	showFancy_1_12_Action,
	hideFancy_1_12_Action,
} from './fancy_1_12'

import {
	setFancy_2_6,
	initSettleFancy_2_6_SendWS,
	initVoidFancy_2_6_SendWS,
	settledFancy_2_6,
	voidedFancy_2_6,
	settleFancy_2_6_SendWS,
	voidFancy_2_6_SendWS,
	showFancy_2_6_Action,
	hideFancy_2_6_Action,
} from './fancy_2_6'

import {
	setFancy_2_12,
	initSettleFancy_2_12_SendWS,
	initVoidFancy_2_12_SendWS,
	settledFancy_2_12,
	voidedFancy_2_12,
	settleFancy_2_12_SendWS,
	voidFancy_2_12_SendWS,
	showFancy_2_12_Action,
	hideFancy_2_12_Action,
} from './fancy_2_12'

import {
	initSettleModal,
	showSettleModal,
	hideSettleModal,
	resetSettleModal,
	setSettleModalToSettleState,
	setSettleModalToVoidState,
	setSettleModalFinalValue,
	setSettleModalFinalMarketSelected,
} from './settleModal'


import {
	setHomeTeam,
	showHomeTeamBatsmanAction,
	hideHomeTeamBatsmanAction,
	setFinalHomeTeamBatsmanValue,
	settle_HomeTeamBatsman_SendWS,
	void_HomeTeamBatsman_SendWS,
} from './homeTeam'

import {
	setAwayTeam,
	showAwayTeamBatsmanAction,
	hideAwayTeamBatsmanAction,
	setFinalAwayTeamBatsmanValue,
	settle_AwayTeamBatsman_SendWS,
	void_AwayTeamBatsman_SendWS,
} from './awayTeam'


const actions = {
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
	showMatchOddsAction,
	hideMatchOddsAction,

	setLambi,
	initSettleLambi_SendWS,
	initVoidLambi_SendWS,
	settledLambi,
	voidedLambi,
	settleLambi_SendWS,
	voidLambi_SendWS,
	showLambiAction,
	hideLambiAction,

	setFancy_1_6,
	initSettleFancy_1_6_SendWS,
	initVoidFancy_1_6_SendWS,
	settledFancy_1_6,
	voidedFancy_1_6,
	settleFancy_1_6_SendWS,
	voidFancy_1_6_SendWS,
	showFancy_1_6_Action,
	hideFancy_1_6_Action,

	setFancy_1_12,
	initSettleFancy_1_12_SendWS,
	initVoidFancy_1_12_SendWS,
	settledFancy_1_12,
	voidedFancy_1_12,
	settleFancy_1_12_SendWS,
	voidFancy_1_12_SendWS,
	showFancy_1_12_Action,
	hideFancy_1_12_Action,

	setFancy_2_6,
	initSettleFancy_2_6_SendWS,
	initVoidFancy_2_6_SendWS,
	settledFancy_2_6,
	voidedFancy_2_6,
	settleFancy_2_6_SendWS,
	voidFancy_2_6_SendWS,
	showFancy_2_6_Action,
	hideFancy_2_6_Action,

	setFancy_2_12,
	initSettleFancy_2_12_SendWS,
	initVoidFancy_2_12_SendWS,
	settledFancy_2_12,
	voidedFancy_2_12,
	settleFancy_2_12_SendWS,
	voidFancy_2_12_SendWS,
	showFancy_2_12_Action,
	hideFancy_2_12_Action,

	initSettleModal,
	showSettleModal,
	hideSettleModal,
	resetSettleModal,
	setSettleModalToSettleState,
	setSettleModalToVoidState,
	setSettleModalFinalValue,
	setSettleModalFinalMarketSelected,


	setHomeTeam,
	showHomeTeamBatsmanAction,
	hideHomeTeamBatsmanAction,
	setFinalHomeTeamBatsmanValue,
	settle_HomeTeamBatsman_SendWS,
	void_HomeTeamBatsman_SendWS,

	setAwayTeam,
	showAwayTeamBatsmanAction,
	hideAwayTeamBatsmanAction,
	setFinalAwayTeamBatsmanValue,
	settle_AwayTeamBatsman_SendWS,
	void_AwayTeamBatsman_SendWS,

}


export default actions