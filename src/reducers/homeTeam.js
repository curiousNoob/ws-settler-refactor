const initialState = {
	batsmenArr: [],
	teamName: "",

	isSettledArr: [],
	isVoidedArr: [],

	isShowActionArr: [],

	finalRunsArr: [],

	selectedBatsmanIndexForModal: null,//is 'finalMarketSelectedForModal', not necessary here actually maybe I use in future somehow
}


const homeTeam = (state = initialState, action) => {
	let index,
		batsmenArr,

		isSettledArr,
		isVoidedArr,
		isShowActionArr,
		finalRunsArr


	switch (action.type) {
		case "SET_HOME_TEAM":
			batsmenArr = action.payload
			finalRunsArr = batsmenArr.map(batsmanEl => (batsmanEl.runs))

			return {
				...state,

				batsmenArr,
				finalRunsArr,

			}

		case "INIT_HOME_TEAM_UI_STATE":
			batsmenArr=state.batsmenArr	

			// console.log("batsmenArr", batsmenArr)
			// debugger;

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
			finalRunsArr[batsmanIndex] = Number(finalValue)

			return { ...state, finalRunsArr }

		case "SET_HOME_TEAM_SELECTED_BATSMAN_INDEX":
			return { ...state, selectedBatsmanIndexForModal: action.payload }

		case "SETTLED_HOME_TEAM_BATSMAN":
			const selectedBatsmanIndex = action.payload

			isSettledArr = [...state.isSettledArr]
			isSettledArr[selectedBatsmanIndex] = true

			return { ...state, isSettledArr }

		case "VOIDED_HOME_TEAM_BATSMAN":
			isVoidedArr = [...state.isVoidedArr]
			isVoidedArr[state.selectedBatsmanIndexForModal] = true

			return { ...state, isVoidedArr }

		default:
			return state
	}
}


export default homeTeam

