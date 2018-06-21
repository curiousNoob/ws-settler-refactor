/******************* Settler RESPONSE JSON *******************/
/*
	{ 
		"name": "Match name",
	  	"home": "Home team name",
	  	"away": "Away team name",
	  	"mo": {
		    "status": "inactive" or "active" or "ready_to_settle" or "settled",
		    "winner": undefined or "Draw" or "Void" or "Winning team name"  # what the server thinks is the winning team
	  	},
	  	"ir": [
		    { "innings": 1 or 2,
		      "team": "Name of innings batting team",
		      "overs": N,  # for a T20 match, currently N= 6, 12, and for 1st innings also 20
		      "status": "inactive" or "active" or "ready_to_settle" or "settled",
		      "runs": undefined or "Void" or NumberOfRuns
		    },
		    ...
		],
	  	"batsmen": [
		    { "innings": 1 or 2,
		      "team": "Name of innings batting team",
		      "batsman": "Name of batsman",
		      "lineup_id": OrderNum,  # what the schedule thinks when this person bats
		      "status": "inactive" or "active" or "ready_to_settle" or "settled",
		      "runs": undefined or "Void" or NumberOfRuns
		    },
		    ...
		]
	}
*/
/*************************************************************/


/******************* TO SETTLE - CLIENT to SERVER JSON *******************/
/*
	{ 
		"market": "mo",
	  	"settle": "Winning team name" or "Draw"
	}

	{ 
		"market": "ir",
	  	"innings": 1 or 2,
	  	"overs": N,
	  	"settle": NumberOfRuns
	}

	{ 
		"market": "batsmen",
	  	"innings": 1 or 2,
	  	"batsman": "Batsman Name",
	  	"settle": NumberOfRuns
	}
*/
/**********************************************************************/

/******************* TO VOID - CLIENT to SERVER JSON *******************/
/*
	{ 
		"market": "mo",
	  	"void": true
	}

	{ 
		"market": "ir",
	  	"innings": 1 or 2,
	 	"overs": N,
	  	"void": true
	}

	{ 
		"market": "batsmen",
	  	"innings": 1 or 2,
	  	"batsman": "Batsman Name",
	  	"void": true
	}
*/
/**********************************************************************/


import * as actionTypes from './actionTypes'
import { isProduction , cookieName, isBackendReady } from '../constants'

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
	setFancy_1_10,
	settledFancy_1_10,
	voidedFancy_1_10,
} from './fancy_1_10'

import {
	setFancy_1_12,
	settledFancy_1_12,
	voidedFancy_1_12,
} from './fancy_1_12'

import {
	setFancy_1_15,
	settledFancy_1_15,
	voidedFancy_1_15,
} from './fancy_1_15'

import {
	setFancy_2_6,
	settledFancy_2_6,
	voidedFancy_2_6,
} from './fancy_2_6'

import {
	setFancy_2_10,
	settledFancy_2_10,
	voidedFancy_2_10,
} from './fancy_2_10'

import {
	setFancy_2_12,
	settledFancy_2_12,
	voidedFancy_2_12,
} from './fancy_2_12'

import {
	setFancy_2_15,
	settledFancy_2_15,
	voidedFancy_2_15,
} from './fancy_2_15'

import {
	setHome,
	setAway,
	setAppInfo,
	setName,
} from './cricketApp'


import {
	setHomeTeam,
	initHomeTeamUIstate,
} from './homeTeam'

import {
	setAwayTeam,
	initAwayTeamUIstate,
} from './awayTeam'


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

export const closeWebsocket = (ws)=>{
	return dispatch => {
		ws.close()

		dispatch(closedWebsocket())
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
	    	if(!isBackendReady){
	    		uri = "ws://localhost:1984/api/settler/ws"
	    	}else{
	    		uri = "ws://localhost:8080/api/settler/ws"//"wss://cct-stage.iosport.co.uk/api/settler/ws"
	    	}
	    }   

	    
	    let mo,	    
	    	ir_lambi,//overs=20

		    ir_fancy_1_6,
		    ir_fancy_1_10,
		    ir_fancy_1_12,
		    ir_fancy_1_15,		    

		    ir_fancy_2_6,
		    ir_fancy_2_10,
		    ir_fancy_2_12,
		    ir_fancy_2_15

		let ir_lambi_Arr,

		    ir_fancy_1_6_Arr,
		    ir_fancy_1_10_Arr,
		    ir_fancy_1_12_Arr,
		    ir_fancy_1_15_Arr,

		    ir_fancy_2_6_Arr,
		    ir_fancy_2_10_Arr,
		    ir_fancy_2_12_Arr,
		    ir_fancy_2_15_Arr


		let homeTeamArr, 
	    	awayTeamArr

	    let isHomeTeamArrEmpty=true
	    let isAwayTeamArrEmpty=true



	    let prevMoWinner
		let prevMoStatus

		let prevLambiRuns
		let prevLambiStatus
		let prevLambiTeam
		
		let prevFancy_1_6_runs
		let prevFancy_1_6_status
		let prevFancy_1_6_team

		let prevFancy_1_10_runs
		let prevFancy_1_10_status
		let prevFancy_1_10_team

		let prevFancy_1_12_runs
		let prevFancy_1_12_status
		let prevFancy_1_12_team

		let prevFancy_1_15_runs
		let prevFancy_1_15_status
		let prevFancy_1_15_team

		let prevFancy_2_6_runs
		let prevFancy_2_6_status
		let prevFancy_2_6_team

		let prevFancy_2_10_runs
		let prevFancy_2_10_status
		let prevFancy_2_10_team

		let prevFancy_2_12_runs
		let prevFancy_2_12_status
		let prevFancy_2_12_team

		let prevFancy_2_15_runs
		let prevFancy_2_15_status
		let prevFancy_2_15_team

		let prevHomeTeamRunsArr
		let prevAwayTeamRunsArr

		let prevHomeTeamStatusArr
		let prevAwayTeamStatusArr


	    let once = true;


	    let didMoWinnerChange
	    let didMoStatusChange

	    let didLambiRunsChange
	    let didLambiStatusChange
	    let didLambiTeamChange

	    let didFancy_1_6_RunsChange
	    let didFancy_1_6_StatusChange
	    let didFancy_1_6_TeamChange

	    let didFancy_1_10_RunsChange
	    let didFancy_1_10_StatusChange
	    let didFancy_1_10_TeamChange

	    let didFancy_1_12_RunsChange
	    let didFancy_1_12_StatusChange
	    let didFancy_1_12_TeamChange

	    let didFancy_1_15_RunsChange
	    let didFancy_1_15_StatusChange
	    let didFancy_1_15_TeamChange

	    let didFancy_2_6_RunsChange
	    let didFancy_2_6_StatusChange
	    let didFancy_2_6_TeamChange

	    let didFancy_2_10_RunsChange
	    let didFancy_2_10_StatusChange
	    let didFancy_2_10_TeamChange

	    let didFancy_2_12_RunsChange
	    let didFancy_2_12_StatusChange
	    let didFancy_2_12_TeamChange

	    let didFancy_2_15_RunsChange
	    let didFancy_2_15_StatusChange
	    let didFancy_2_15_TeamChange

	    let didAnyHomeTeamRunsChange
		let didAnyAwayTeamRunsChange

		let didAnyHomeTeamStatusChange
		let didAnyAwayTeamStatusChange


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

	    	
	    	ir_lambi_Arr 		= data.ir.filter(market =>(market.innings ==1 && 
	    												   market.overs == 20)
		    							)
		    ir_fancy_1_6_Arr   	= data.ir.filter(market =>(market.innings ==1 && 
		    										       market.overs == 6)
		    							)
		    ir_fancy_1_10_Arr   = data.ir.filter(market =>(market.innings ==1 && 
		    										       market.overs == 10)
		    							)
		    ir_fancy_1_12_Arr   = data.ir.filter(market =>(market.innings ==1&& 
		    										       market.overs == 12)
		    							)
		    ir_fancy_1_15_Arr   = data.ir.filter(market =>(market.innings ==1&& 
		    										       market.overs == 15)
		    							)
		    ir_fancy_2_6_Arr    = data.ir.filter(market =>(market.innings ==2 && 
		    										       market.overs == 6)
		    							)
		    ir_fancy_2_10_Arr    = data.ir.filter(market =>(market.innings ==2 && 
		    										       market.overs == 10)
		    							)
		    ir_fancy_2_12_Arr   = data.ir.filter(market =>(market.innings ==2 && 
		    										       market.overs == 12)

		    							)
		    ir_fancy_2_15_Arr   = data.ir.filter(market =>(market.innings ==2 && 
		    										       market.overs == 15)
		    							)

		    homeTeamArr			=data.batsmen
				.filter(batsmanEl =>(batsmanEl.team===data.home))//it starts as empty []
			awayTeamArr			=data.batsmen
				.filter(batsmanEl =>(batsmanEl.team===data.away))//too
			
			// console.log('homeTeamArr',homeTeamArr)
			// debugger;

		    mo              = data.mo		    
	    	ir_lambi 		= ir_lambi_Arr[0]
		    ir_fancy_1_6   	= ir_fancy_1_6_Arr[0]
		    ir_fancy_1_10   = ir_fancy_1_10_Arr[0]
		    ir_fancy_1_12   = ir_fancy_1_12_Arr[0]
		    ir_fancy_1_15   = ir_fancy_1_15_Arr[0]
		    ir_fancy_2_6    = ir_fancy_2_6_Arr[0]
		    ir_fancy_2_10   = ir_fancy_2_10_Arr[0]
		    ir_fancy_2_12   = ir_fancy_2_12_Arr[0]
		    ir_fancy_2_15   = ir_fancy_2_15_Arr[0]
		    

	    	didMoWinnerChange=(prevMoWinner !== mo.winner)
	    	didMoStatusChange=(prevMoStatus!==mo.status)

	    	didLambiRunsChange=(prevLambiRuns !== ir_lambi.runs)
	    	didLambiStatusChange=(prevLambiStatus !== ir_lambi.status)
	    	didLambiTeamChange=(prevLambiTeam !== ir_lambi.team)

	    	didFancy_1_6_RunsChange=(prevFancy_1_6_runs!==ir_fancy_1_6.runs)
		    didFancy_1_6_StatusChange=(prevFancy_1_6_status!==ir_fancy_1_6.status)
		    didFancy_1_6_TeamChange=(prevFancy_1_6_team!==ir_fancy_1_6.team)

		    didFancy_1_10_RunsChange=(prevFancy_1_10_runs!==ir_fancy_1_10.runs)
		    didFancy_1_10_StatusChange=(prevFancy_1_10_status!==ir_fancy_1_10.status)
		    didFancy_1_10_TeamChange=(prevFancy_1_10_team!==ir_fancy_1_10.team)

		    didFancy_1_12_RunsChange=(prevFancy_1_12_runs!==ir_fancy_1_12.runs)
		    didFancy_1_12_StatusChange=(prevFancy_1_12_status!==ir_fancy_1_12.status)
		    didFancy_1_12_TeamChange=(prevFancy_1_12_team!==ir_fancy_1_12.team)

		    didFancy_1_15_RunsChange=(prevFancy_1_15_runs!==ir_fancy_1_15.runs)
		    didFancy_1_15_StatusChange=(prevFancy_1_15_status!==ir_fancy_1_15.status)
		    didFancy_1_15_TeamChange=(prevFancy_1_15_team!==ir_fancy_1_15.team)

		    didFancy_2_6_RunsChange=(prevFancy_2_6_runs!==ir_fancy_2_6.runs)
		    didFancy_2_6_StatusChange=(prevFancy_2_6_status!==ir_fancy_2_6.status)
		    didFancy_2_6_TeamChange=(prevFancy_2_6_team!==ir_fancy_2_6.team)

		    didFancy_2_10_RunsChange=(prevFancy_2_10_runs!==ir_fancy_2_10.runs)
		    didFancy_2_10_StatusChange=(prevFancy_2_10_status!==ir_fancy_2_10.status)
		    didFancy_2_10_TeamChange=(prevFancy_2_10_team!==ir_fancy_2_10.team)

		    didFancy_2_12_RunsChange=(prevFancy_2_12_runs!==ir_fancy_2_12.runs)
		    didFancy_2_12_StatusChange=(prevFancy_2_12_status!==ir_fancy_2_12.status)
		    didFancy_2_12_TeamChange=(prevFancy_2_12_team!==ir_fancy_2_12.team)

		    didFancy_2_15_RunsChange=(prevFancy_2_15_runs!==ir_fancy_2_15.runs)
		    didFancy_2_15_StatusChange=(prevFancy_2_15_status!==ir_fancy_2_15.status)
		    didFancy_2_15_TeamChange=(prevFancy_2_15_team!==ir_fancy_2_15.team)


		    didAnyHomeTeamRunsChange = homeTeamArr?
		    	homeTeamArr
		    	.map(batsmanEl => {
		    		return batsmanEl.runs
		    	})
				.reduce((accBool, currRuns, currIndex) =>{
					return (accBool || 
						currRuns!==(
							prevHomeTeamRunsArr?
							prevHomeTeamRunsArr[currIndex]:
							true//when prevHomeTeamRunsArr is [], implies change 
						)
					)
				}, 	false) :
				false//homeTeamArr is []
				
		    didAnyHomeTeamStatusChange = homeTeamArr?
		    	homeTeamArr
		    	.map(batsmanEl => {
		    		return batsmanEl.status
		    	})
				.reduce((accBool, currRuns, currIndex) =>{
					return (accBool || 
						currRuns!==(
							prevHomeTeamStatusArr?
							prevHomeTeamStatusArr[currIndex]:
							true
						)
					)
				}, 	false) :
				false
				
			didAnyAwayTeamRunsChange = awayTeamArr?
		    	awayTeamArr
		    	.map(batsmanEl => {
		    		return batsmanEl.runs
		    	})
				.reduce((accBool, currRuns, currIndex) =>{
					return (accBool || 
						currRuns!==(
							prevAwayTeamRunsArr?
							prevAwayTeamRunsArr[currIndex]:
							true
						)
					)
				}, 	false) :
				false

			didAnyAwayTeamStatusChange = awayTeamArr?
		    	awayTeamArr
		    	.map(batsmanEl => {
		    		return batsmanEl.status
		    	})
				.reduce((accBool, currRuns, currIndex) =>{
					return (accBool || 
						currRuns!==(
							prevAwayTeamStatusArr?
							prevAwayTeamStatusArr[currIndex]:
							true
						)
					)
				}, 	false) :
				false
				
				
			if (didMoWinnerChange) {
				dispatch(setFinalMo(mo.winner))				
			}
			if(didMoWinnerChange || 
			   didMoStatusChange
			){
				dispatch(setMatchOdds(mo))
			}

			if (didLambiRunsChange){
				dispatch(setFinalLambi(ir_lambi.runs))				
			}
			if( didLambiRunsChange ||
				didLambiStatusChange || 
				didLambiTeamChange  
			){
				dispatch(setLambi(ir_lambi))
			}			

			if(didFancy_1_6_RunsChange){
				dispatch(setFinalFancy_1_6(ir_fancy_1_6.runs))								
			}
			if(	didFancy_1_6_RunsChange ||
				didFancy_1_6_StatusChange ||
				didFancy_1_6_TeamChange
			){
				dispatch(setFancy_1_6(ir_fancy_1_6))
			}

			if(didFancy_1_10_RunsChange){
				dispatch(setFinalFancy_1_10(ir_fancy_1_10.runs))								
			}
			if(	didFancy_1_10_RunsChange ||
				didFancy_1_10_StatusChange ||
				didFancy_1_10_TeamChange
			){
				dispatch(setFancy_1_10(ir_fancy_1_10))
			}			

			if(didFancy_1_12_RunsChange){
				dispatch(setFinalFancy_1_12(ir_fancy_1_12.runs))							
			}
			if(	didFancy_1_12_RunsChange ||				
				didFancy_1_12_StatusChange ||
				didFancy_1_12_TeamChange					
			){
				dispatch(setFancy_1_12(ir_fancy_1_12))					
			}

			if(didFancy_1_15_RunsChange){
				dispatch(setFinalFancy_1_15(ir_fancy_1_15.runs))							
			}
			if(	didFancy_1_15_RunsChange ||				
				didFancy_1_15_StatusChange ||
				didFancy_1_15_TeamChange					
			){
				dispatch(setFancy_1_15(ir_fancy_1_15))					
			}			

			if(didFancy_2_6_RunsChange){
				dispatch(setFinalFancy_2_6(ir_fancy_2_6.runs))							
			}
			if( didFancy_2_6_RunsChange ||
				didFancy_2_6_StatusChange ||
				didFancy_2_6_TeamChange					
			){
				dispatch(setFancy_2_6(ir_fancy_2_6))					
			}

			if(didFancy_2_10_RunsChange){
				dispatch(setFinalFancy_2_10(ir_fancy_2_10.runs))							
			}
			if( didFancy_2_10_RunsChange ||
				didFancy_2_10_StatusChange ||
				didFancy_2_10_TeamChange					
			){
				dispatch(setFancy_2_10(ir_fancy_2_10))					
			}			

			if(didFancy_2_12_RunsChange){
				dispatch(setFinalFancy_2_12(ir_fancy_2_12.runs))							
			}
			if( didFancy_2_12_RunsChange ||
				didFancy_2_12_StatusChange ||
				didFancy_2_12_TeamChange
			){
				dispatch(setFancy_2_12(ir_fancy_2_12))
			}

			if(didFancy_2_15_RunsChange){
				dispatch(setFinalFancy_2_15(ir_fancy_2_15.runs))							
			}
			if( didFancy_2_15_RunsChange ||
				didFancy_2_15_StatusChange ||
				didFancy_2_15_TeamChange
			){
				dispatch(setFancy_2_15(ir_fancy_2_15))
			}

			
			if(didAnyHomeTeamRunsChange ||
			   didAnyHomeTeamStatusChange
			){
				dispatch(setHomeTeam(homeTeamArr))
			}

			if(didAnyAwayTeamRunsChange ||
			   didAnyAwayTeamStatusChange
			){
				dispatch(setAwayTeam(awayTeamArr))
			}

			if(isHomeTeamArrEmpty && homeTeamArr.length){
				dispatch(initHomeTeamUIstate())

				isHomeTeamArrEmpty=false
			}
			if(isAwayTeamArrEmpty && awayTeamArr.length){
				dispatch(initAwayTeamUIstate())

				isAwayTeamArrEmpty=false
			}


			if (once){
				dispatch(setHome(data.home))
				dispatch(setAway(data.away))
				dispatch(setAppInfo(data.appinfo))
				dispatch(setName(data.name))

				once=false
			}


			prevMoWinner = mo.winner
			prevMoStatus = mo.status

			prevLambiRuns = ir_lambi.runs
			prevLambiStatus = ir_lambi.status
			prevLambiTeam = ir_lambi.team
			
			prevFancy_1_6_runs=ir_fancy_1_6.runs
			prevFancy_1_6_status=ir_fancy_1_6.status
			prevFancy_1_6_team=ir_fancy_1_6.team

			prevFancy_1_10_runs=ir_fancy_1_10.runs
			prevFancy_1_10_status=ir_fancy_1_10.status
			prevFancy_1_10_team=ir_fancy_1_10.team

			prevFancy_1_12_runs=ir_fancy_1_12.runs
			prevFancy_1_12_status=ir_fancy_1_12.status
			prevFancy_1_12_team=ir_fancy_1_12.team

			prevFancy_1_15_runs=ir_fancy_1_15.runs
			prevFancy_1_15_status=ir_fancy_1_15.status
			prevFancy_1_15_team=ir_fancy_1_15.team

			prevFancy_2_6_runs=ir_fancy_2_6.runs
			prevFancy_2_6_status=ir_fancy_2_6.status
			prevFancy_2_6_team=ir_fancy_2_6.team

			prevFancy_2_10_runs=ir_fancy_2_10.runs
			prevFancy_2_10_status=ir_fancy_2_10.status
			prevFancy_2_10_team=ir_fancy_2_10.team

			prevFancy_2_12_runs=ir_fancy_2_12.runs
			prevFancy_2_12_status=ir_fancy_2_12.status
			prevFancy_2_12_team=ir_fancy_2_12.team

			prevFancy_2_15_runs=ir_fancy_2_15.runs
			prevFancy_2_15_status=ir_fancy_2_15.status
			prevFancy_2_15_team=ir_fancy_2_15.team


			prevHomeTeamRunsArr = homeTeamArr.map(batsmanEl => batsmanEl.runs)
		    prevHomeTeamStatusArr = homeTeamArr.map(batsmanEl => batsmanEl.status)

		    prevAwayTeamRunsArr = awayTeamArr.map(batsmanEl => batsmanEl.runs)
		    prevAwayTeamStatusArr = awayTeamArr.map(batsmanEl => batsmanEl.status)
		}
	}

}