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
	setFinalFancy_1_10,
	setFinalFancy_1_12,
	setFinalFancy_1_15,
	setFinalFancy_2_6,
	setFinalFancy_2_10,
	setFinalFancy_2_12,
	setFinalFancy_2_15,
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
	setFancy_1_10,
	initSettleFancy_1_10_SendWS,
	initVoidFancy_1_10_SendWS,
	settledFancy_1_10,
	voidedFancy_1_10,
	settleFancy_1_10_SendWS,
	voidFancy_1_10_SendWS,
	showFancy_1_10_Action,
	hideFancy_1_10_Action,
} from './fancy_1_10'

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
	setFancy_1_15,
	initSettleFancy_1_15_SendWS,
	initVoidFancy_1_15_SendWS,
	settledFancy_1_15,
	voidedFancy_1_15,
	settleFancy_1_15_SendWS,
	voidFancy_1_15_SendWS,
	showFancy_1_15_Action,
	hideFancy_1_15_Action,
} from './fancy_1_15'

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
	setFancy_2_10,
	initSettleFancy_2_10_SendWS,
	initVoidFancy_2_10_SendWS,
	settledFancy_2_10,
	voidedFancy_2_10,
	settleFancy_2_10_SendWS,
	voidFancy_2_10_SendWS,
	showFancy_2_10_Action,
	hideFancy_2_10_Action,
} from './fancy_2_10'

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
	setFancy_2_15,
	initSettleFancy_2_15_SendWS,
	initVoidFancy_2_15_SendWS,
	settledFancy_2_15,
	voidedFancy_2_15,
	settleFancy_2_15_SendWS,
	voidFancy_2_15_SendWS,
	showFancy_2_15_Action,
	hideFancy_2_15_Action,
} from './fancy_2_15'

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
	initHomeTeamUIstate,
	showHomeTeamBatsmanAction,
	hideHomeTeamBatsmanAction,
	setFinalHomeTeamBatsmanValue,
	settle_HomeTeamBatsman_SendWS,
	void_HomeTeamBatsman_SendWS,
} from './homeTeam'

import {
	setAwayTeam,
	initAwayTeamUIstate,
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
	setFinalFancy_1_10,
	setFinalFancy_1_12,
	setFinalFancy_1_15,
	setFinalFancy_2_6,
	setFinalFancy_2_10,
	setFinalFancy_2_12,
	setFinalFancy_2_15,

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

	setFancy_1_10,
	initSettleFancy_1_10_SendWS,
	initVoidFancy_1_10_SendWS,
	settledFancy_1_10,
	voidedFancy_1_10,
	settleFancy_1_10_SendWS,
	voidFancy_1_10_SendWS,
	showFancy_1_10_Action,
	hideFancy_1_10_Action,

	setFancy_1_12,
	initSettleFancy_1_12_SendWS,
	initVoidFancy_1_12_SendWS,
	settledFancy_1_12,
	voidedFancy_1_12,
	settleFancy_1_12_SendWS,
	voidFancy_1_12_SendWS,
	showFancy_1_12_Action,
	hideFancy_1_12_Action,

	setFancy_1_15,
	initSettleFancy_1_15_SendWS,
	initVoidFancy_1_15_SendWS,
	settledFancy_1_15,
	voidedFancy_1_15,
	settleFancy_1_15_SendWS,
	voidFancy_1_15_SendWS,
	showFancy_1_15_Action,
	hideFancy_1_15_Action,

	setFancy_2_6,
	initSettleFancy_2_6_SendWS,
	initVoidFancy_2_6_SendWS,
	settledFancy_2_6,
	voidedFancy_2_6,
	settleFancy_2_6_SendWS,
	voidFancy_2_6_SendWS,
	showFancy_2_6_Action,
	hideFancy_2_6_Action,

	setFancy_2_10,
	initSettleFancy_2_10_SendWS,
	initVoidFancy_2_10_SendWS,
	settledFancy_2_10,
	voidedFancy_2_10,
	settleFancy_2_10_SendWS,
	voidFancy_2_10_SendWS,
	showFancy_2_10_Action,
	hideFancy_2_10_Action,

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
	initHomeTeamUIstate,
	showHomeTeamBatsmanAction,
	hideHomeTeamBatsmanAction,
	setFinalHomeTeamBatsmanValue,
	settle_HomeTeamBatsman_SendWS,
	void_HomeTeamBatsman_SendWS,

	setAwayTeam,
	initAwayTeamUIstate,
	showAwayTeamBatsmanAction,
	hideAwayTeamBatsmanAction,
	setFinalAwayTeamBatsmanValue,
	settle_AwayTeamBatsman_SendWS,
	void_AwayTeamBatsman_SendWS,

}


export default actions