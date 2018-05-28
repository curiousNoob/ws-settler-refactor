const initialState = {
	batsmenArr: [],
	teamName: "",

	isSettledArr: [],
	isVoidedArr: [],

	isShowActionArr: [],

	finalRunsArr:[],
}

let index 
let isShowActionArr

const homeTeam = (state = initialState, action) => {
	switch (action.type) {
		case "SET_HOME_TEAM":
			const batsmenArr = action.payload

			return {
				...state,

				batsmenArr: batsmenArr,
				teamName: batsmenArr[0].team,
				isSettledArr: Array(batsmenArr.length).fill(false),
				isVoidedArr: Array(batsmenArr.length).fill(false),
				isShowActionArr: Array(batsmenArr.length).fill(false),

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


		default:
			return state
	}
}


export default homeTeam

