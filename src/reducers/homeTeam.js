const initialState = {
	batsmenArr:[],
	teamName:"",

	isSettledArr:[],
	isVoidedArr:[],

	isShowActionArr:[],
}


const homeTeam=(state=initialState, action)=>{
	switch(action.type){
		case "SET_HOME_TEAM":
			const batsmenArr = action.payload
			
			return {	
				...state,

				batsmenArr: batsmenArr,
				teamName:batsmenArr[0].team,
				isSettledArr:Array(batsmenArr.length).fill(false),
				isVoidedArr:Array(batsmenArr.length).fill(false),
				isShowActionArr:Array(batsmenArr.length).fill(false),

			}			

			
		default:
			return state
	}
}


export default homeTeam