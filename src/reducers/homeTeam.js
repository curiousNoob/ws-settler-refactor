const initialState = {
	batsmenArr: [],
	teamName: "",

	isSettledArr: [],
	isVoidedArr: [],

	isShowActionArr: [],

	finalRunsArr: [],

	selectedBatsmanIndexForModal: null,//is 'finalMarketSelectedForModal', not necessary here actually maybe I use in future somehow
}

let index
let isShowActionArr
let finalRunsArr

const homeTeam = (state = initialState, action) => {
	switch (action.type) {
		case "SET_HOME_TEAM":
			const batsmenArr = action.payload
			finalRunsArr = batsmenArr.map(batsmanEl => (batsmanEl.runs))

			return {
				...state,

				batsmenArr: batsmenArr,
				teamName: batsmenArr.length?batsmenArr[0].team:"No Team",
				isSettledArr: Array(batsmenArr.length).fill(false),
				isVoidedArr: Array(batsmenArr.length).fill(false),
				isShowActionArr: Array(batsmenArr.length).fill(false),
				finalRunsArr,

			}

		case "SHOW_HOME_TEAM_BATSMAN_ACTION":
			index = action.payload
			isShowActionArr = [...state.isShowActionArr]
			isShowActionArr[index] = true
			return { ...state, isShowActionArr }

		case "HIDE_HOME_TEAM_BATSMAN_ACTION":
			index = action.payload
			isShowActionArr = [...state.isShowActionArr]
			isShowActionArr[index] = false
			return { ...state, isShowActionArr }

		case "SET_FINAL_HOME_TEAM_BATSMAN_VALUE":
			const {
				finalValue,
				batsmanIndex,
			} = action.payload

			finalRunsArr = [...state.finalRunsArr]
			finalRunsArr[batsmanIndex] = finalValue
			return { ...state, finalRunsArr }

		case "SET_HOME_TEAM_SELECTED_BATSMAN_INDEX":
			return { ...state, selectedBatsmanIndexForModal: action.payload }

		case "SETTLED_HOME_TEAM_BATSMAN":
			const selectedBatsmanIndex = action.payload

			const isSettledArr = [...state.isSettledArr]
			isSettledArr[selectedBatsmanIndex] = true

			return { ...state, isSettledArr }

		case "VOIDED_HOME_TEAM_BATSMAN":
			const isVoidedArr = [...state.isVoidedArr]
			isVoidedArr[state.selectedBatsmanIndexForModal] = true

			return { ...state, isVoidedArr }

		default:
			return state
	}
}


export default homeTeam

