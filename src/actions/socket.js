import * as actionTypes from './actionTypes'
import { isProduction , cookieName } from '../constants'

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
	setHome,
	setAway,
	setAppInfo,
	setName,
} from './cricketApp'


export const openWebSocket = ()=>{
	return {
		type:actionTypes.OPEN_WEBSOCKET,
	}
}

export const closedWebsocket = ()=>{
	return {
		type:actionTypes.CLOSED_WEBSOCKET,
	}
}

export const closeWebsocket = ()=>{
	return {
		type:actionTypes.CLOSE_WEBSOCKET,
	}
}

export const checkWebSocketExist = ()=>{
	return {
		type:actionTypes.CHECK_WEBSOCKET_EXIST,
	}
}

export const notSuppWebSocket = () => {
	return {
		type:actionTypes.NOT_SUPPORT_WEBSOCKET,
	}
}

export const websocketConnectedSuccess = (ws)=>{
	return {
		type:actionTypes.WEBSOCKET_SUCCESS,
		payload:ws,
	}
}

export const websocketConnectedErr = (err)=>{
	return {
		type:actionTypes.WEBSOCKET_ERR,
		payload:err,
	}
}


export const establishWebSocketConnection=()=>{
	return dispatch => {

		dispatch(openWebSocket())

		let uri;

	    if (isProduction) {
	      const host = window.location.host;
	      const path = "/api/settler/ws";

	      if (window.location.protocol === "https:") {
	        uri = "wss://" + host + path;
	      } else {
	        uri = "ws://" + host + path;
	      }
	    } else {
	      uri = "ws://localhost:8080/api/settler/ws"//"wss://cct-stage.iosport.co.uk/api/settler/ws"
	    }

	    let prevMoWinner
		let prevMoStatus

		let prevLambiRuns
		let prevLambiStatus
		let prevLambiTeam
		
		let prevFancy_1_6_runs
		let prevFancy_1_6_status
		let prevFancy_1_6_team

		let prevFancy_1_12_runs
		let prevFancy_1_12_status
		let prevFancy_1_12_team

		let prevFancy_2_6_runs
		let prevFancy_2_6_status
		let prevFancy_2_6_team

		let prevFancy_2_12_runs
		let prevFancy_2_12_status
		let prevFancy_2_12_team

	    let once = true;

	    let ws = new WebSocket(uri);

	    ws.onopen = () =>{
	    	dispatch(websocketConnectedSuccess(ws))
	    }

	    ws.onerror = (err) =>{
	    	dispatch(websocketConnectedErr(err.message))
	    }

	    ws.onclose = (e) =>{
	    	dispatch(closedWebsocket())
	    }

	    ws.onmessage = (response) => {
	    	const data = JSON.parse(response.data)
	    	
			if (prevMoWinner !== data.mo.winner) {
				dispatch(setFinalMo(data.mo.winner))

				if(prevMoStatus!==data.mo.status){
					dispatch(setMatchOdds(data.mo))
				}
			}

			if (prevLambiRuns !== data.ir_lambi.runs){
				dispatch(setFinalLambi(data.ir_lambi.runs))

				if(prevLambiStatus !== data.ir_lambi.status || 
				   prevLambiTeam !== data.ir_lambi.team
				){
					dispatch(setLambi(data.ir_lambi))
				}
			}

			if(prevFancy_1_6_runs!==data.ir_fancy_1_6.runs){
				dispatch(setFinalFancy_1_6(data.ir_fancy_1_6.runs))

				if(
					prevFancy_1_6_status!==data.ir_fancy_1_6.status ||
					prevFancy_1_6_team!==data.ir_fancy_1_6.team
				){
					dispatch(setFancy_1_6(data.ir_fancy_1_6))
				}				
			}

			if(prevFancy_1_12_runs!==data.ir_fancy_1_12.runs){
				dispatch(setFinalFancy_1_12(data.ir_fancy_1_12.runs))

				if(					
					prevFancy_1_12_status!==data.ir_fancy_1_12.status ||
					prevFancy_1_12_team!==data.ir_fancy_1_12.team					
				){
					dispatch(setFancy_1_12(data.ir_fancy_1_12))					
				}			
			}

			if(prevFancy_2_6_runs!==data.ir_fancy_2_6.runs){
				dispatch(setFinalFancy_2_6(data.ir_fancy_2_6.runs))

				if(
					prevFancy_2_6_status!==data.ir_fancy_2_6.status ||
					prevFancy_2_6_team!==data.ir_fancy_2_6.team					
				){
					dispatch(setFancy_2_6(data.ir_fancy_2_6))					
				}			
			}

			if(prevFancy_2_12_runs!==data.ir_fancy_2_12.runs){
				dispatch(setFinalFancy_2_12(data.ir_fancy_2_12.runs))

				if(
					prevFancy_2_12_status!==data.ir_fancy_2_12.status ||
					prevFancy_2_12_team!==data.ir_fancy_2_12.team
				){
					dispatch(setFancy_2_12(data.ir_fancy_2_12))
				}			
			}

			if (once){
				dispatch(setHome(data.home))
				dispatch(setAway(data.away))
				dispatch(setAppInfo(data.appinfo))
				dispatch(setName(data.name))

				once=false
			}


			prevMoWinner = data.mo.winner
			prevMoStatus = data.mo.status

			prevLambiRuns = data.ir_lambi.runs
			prevLambiStatus = data.ir_lambi.status
			prevLambiTeam = data.ir_lambi.team
			
			prevFancy_1_6_runs=data.ir_fancy_1_6.runs
			prevFancy_1_6_status=data.ir_fancy_1_6.status
			prevFancy_1_6_team=data.ir_fancy_1_6.team

			prevFancy_1_12_runs=data.ir_fancy_1_12.runs
			prevFancy_1_12_status=data.ir_fancy_1_12.status
			prevFancy_1_12_team=data.ir_fancy_1_12.team

			prevFancy_2_6_runs=data.ir_fancy_2_6.runs
			prevFancy_2_6_status=data.ir_fancy_2_6.status
			prevFancy_2_6_team=data.ir_fancy_2_6.team

			prevFancy_2_12_runs=data.ir_fancy_2_12.runs
			prevFancy_2_12_status=data.ir_fancy_2_12.status
			prevFancy_2_12_team=data.ir_fancy_2_12.team
		}
	}

}



