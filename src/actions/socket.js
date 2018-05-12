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


	    let didMoWinnerChange
	    let didMoStatusChange

	    let didLambiRunsChange
	    let didLambiStatusChange
	    let didLambiTeamChange

	    let didFancy_1_6_RunsChange
	    let didFancy_1_6_StatusChange
	    let didFancy_1_6_TeamChange

	    let didFancy_1_12_RunsChange
	    let didFancy_1_12_StatusChange
	    let didFancy_1_12_TeamChange

	    let didFancy_2_6_RunsChange
	    let didFancy_2_6_StatusChange
	    let didFancy_2_6_TeamChange

	    let didFancy_2_12_RunsChange
	    let didFancy_2_12_StatusChange
	    let didFancy_2_12_TeamChange

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

	    	didMoWinnerChange=(prevMoWinner !== data.mo.winner)
	    	didMoStatusChange=(prevMoStatus!==data.mo.status)

	    	didLambiRunsChange=(prevLambiRuns !== data.ir_lambi.runs)
	    	didLambiStatusChange=(prevLambiStatus !== data.ir_lambi.status)
	    	didLambiTeamChange=(prevLambiTeam !== data.ir_lambi.team)

	    	didFancy_1_6_RunsChange=(prevFancy_1_6_runs!==data.ir_fancy_1_6.runs)
		    didFancy_1_6_StatusChange=(prevFancy_1_6_status!==data.ir_fancy_1_6.status)
		    didFancy_1_6_TeamChange=(prevFancy_1_6_team!==data.ir_fancy_1_6.team)

		    didFancy_1_12_RunsChange=(prevFancy_1_12_runs!==data.ir_fancy_1_12.runs)
		    didFancy_1_12_StatusChange=(prevFancy_1_12_status!==data.ir_fancy_1_12.status)
		    didFancy_1_12_TeamChange=(prevFancy_1_12_team!==data.ir_fancy_1_12.team)

		    didFancy_2_6_RunsChange=(prevFancy_2_6_runs!==data.ir_fancy_2_6.runs)
		    didFancy_2_6_StatusChange=(prevFancy_2_6_status!==data.ir_fancy_2_6.status)
		    didFancy_2_6_TeamChange=(prevFancy_2_6_team!==data.ir_fancy_2_6.team)

		    didFancy_2_12_RunsChange=(prevFancy_2_12_runs!==data.ir_fancy_2_12.runs)
		    didFancy_2_12_StatusChange=(prevFancy_2_12_status!==data.ir_fancy_2_12.status)
		    didFancy_2_12_TeamChange=(prevFancy_2_12_team!==data.ir_fancy_2_12.team)

			if (didMoWinnerChange) {
				dispatch(setFinalMo(data.mo.winner))				
			}
			if(didMoWinnerChange || 
			   didMoStatusChange
			){
				dispatch(setMatchOdds(data.mo))
			}

			if (didLambiRunsChange){
				dispatch(setFinalLambi(data.ir_lambi.runs))				
			}
			if( didLambiRunsChange ||
				didLambiStatusChange || 
				didLambiTeamChange  
			){
				dispatch(setLambi(data.ir_lambi))
			}			

			if(didFancy_1_6_RunsChange){
				dispatch(setFinalFancy_1_6(data.ir_fancy_1_6.runs))								
			}
			if(	didFancy_1_6_RunsChange ||
				didFancy_1_6_StatusChange ||
				didFancy_1_6_TeamChange
			){
				dispatch(setFancy_1_6(data.ir_fancy_1_6))
			}			

			if(didFancy_1_12_RunsChange){
				dispatch(setFinalFancy_1_12(data.ir_fancy_1_12.runs))							
			}
			if(	didFancy_1_12_RunsChange ||				
				didFancy_1_12_StatusChange ||
				didFancy_1_12_TeamChange					
			){
				dispatch(setFancy_1_12(data.ir_fancy_1_12))					
			}			

			if(didFancy_2_6_RunsChange){
				dispatch(setFinalFancy_2_6(data.ir_fancy_2_6.runs))							
			}
			if( didFancy_2_6_RunsChange ||
				didFancy_2_6_StatusChange ||
				didFancy_2_6_TeamChange					
			){
				dispatch(setFancy_2_6(data.ir_fancy_2_6))					
			}			

			if(didFancy_2_12_RunsChange){
				dispatch(setFinalFancy_2_12(data.ir_fancy_2_12.runs))							
			}
			if( didFancy_2_12_RunsChange ||
				didFancy_2_12_StatusChange ||
				didFancy_2_12_TeamChange
			){
				dispatch(setFancy_2_12(data.ir_fancy_2_12))
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



