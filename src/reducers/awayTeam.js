const initialState = {
	batsmenArr: [],
	teamName: "",
//{UI state
	isSettledArr: [],
	isVoidedArr: [],

	isShowActionArr: [],

	finalRunsArr: [],
//}
	selectedBatsmanIndexForModal: null,//is 'finalMarketSelectedForModal', not necessary here actually maybe I use in future somehow
}


const awayTeam = (state = initialState, action) => {
	let index,
		batsmenArr,

		isSettledArr,
		isVoidedArr,
		isShowActionArr,
		finalRunsArr

	switch (action.type) {
		case "SET_AWAY_TEAM":
			batsmenArr = action.payload
			finalRunsArr = batsmenArr.map(batsmanEl => (batsmanEl.runs))			

			return {
				...state,

				batsmenArr,
				finalRunsArr,
			}

		case "INIT_AWAY_TEAM_UI_STATE":
			batsmenArr=state.batsmenArr

			const teamName = batsmenArr[0].team
			const batsmenArrLen = batsmenArr.length			

			isSettledArr = Array(batsmenArrLen).fill(false)
			isVoidedArr = Array(batsmenArrLen).fill(false)
			isShowActionArr = Array(batsmenArrLen).fill(false)

			finalRunsArr = batsmenArr.map(batsmanEl => (batsmanEl.runs))

			return {
				...state,

				teamName,

				isSettledArr,
				isVoidedArr,
				isShowActionArr,
				finalRunsArr,
			}		

		case "SHOW_AWAY_TEAM_BATSMAN_ACTION":
			index = action.payload
			isShowActionArr = [...state.isShowActionArr]
			isShowActionArr[index] = true

			return { ...state, isShowActionArr }

		case "HIDE_AWAY_TEAM_BATSMAN_ACTION":
			index = action.payload
			isShowActionArr = [...state.isShowActionArr]
			isShowActionArr[index] = false

			return { ...state, isShowActionArr }

		case "SET_FINAL_AWAY_TEAM_BATSMAN_VALUE":
			const {
				finalValue,
				batsmanIndex,
			} = action.payload

			finalRunsArr = [...state.finalRunsArr]
			finalRunsArr[batsmanIndex] = finalValue

			return { ...state, finalRunsArr }

		case "SET_AWAY_TEAM_SELECTED_BATSMAN_INDEX":
			return { ...state, selectedBatsmanIndexForModal: action.payload }

		case "SETTLED_AWAY_TEAM_BATSMAN":
			const selectedBatsmanIndex = action.payload

			isSettledArr = [...state.isSettledArr]
			isSettledArr[selectedBatsmanIndex] = true

			return { ...state, isSettledArr }

		case "VOIDED_AWAY_TEAM_BATSMAN":
			isVoidedArr = [...state.isVoidedArr]
			isVoidedArr[state.selectedBatsmanIndexForModal] = true

			return { ...state, isVoidedArr }


		default:
			return state

	}
}


export default awayTeam