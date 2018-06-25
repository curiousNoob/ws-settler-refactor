import { combineReducers } from "redux"

import auth from "./auth"
import socket from "./socket"
import cricketApp from "./cricketApp"

import matchOdds from "./matchOdds"
import lambi from "./lambi"
import fancy_1_6 from "./fancy_1_6"
import fancy_1_10 from "./fancy_1_10"
import fancy_1_12 from "./fancy_1_12"
import fancy_1_15 from "./fancy_1_15"
import fancy_2_6 from "./fancy_2_6"
import fancy_2_10 from "./fancy_2_10"
import fancy_2_12 from "./fancy_2_12"
import fancy_2_15 from "./fancy_2_15"

import settleModal from "./settleModal"

import homeTeam from "./homeTeam"
import awayTeam from "./awayTeam"


const reducers = combineReducers({
 	auth,
 	socket,
	cricketApp,

	matchOdds,
	lambi,
	fancy_1_6,
	fancy_1_10,
	fancy_1_12,
	fancy_1_15,
	fancy_2_6,
	fancy_2_10,
	fancy_2_12,
	fancy_2_15,

	settleModal,

	homeTeam,
	awayTeam,
})


export default reducers