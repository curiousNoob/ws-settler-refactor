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
} from './matchOdds'

import {
	setLambi,
} from './lambi'

import {
	setFancy_1_6,
} from './fancy_1_6'

import {
	setFancy_1_12,
} from './fancy_1_12'

import {
	setFancy_2_6,
} from './fancy_2_6'

import {
	setFancy_2_12,
} from './fancy_2_12'

import {
	initSettleModal,
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

	initSettleModal,
}


export  default  actions