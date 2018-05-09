
import { connect } from "react-redux"


import actions from '../actions'
import App from '../App'


const mapStateToProps = state =>{
  return {    
    isLoading: state.auth.isLoading,
    isLoggedIn: state.auth.isLoggedIn,
    isLogInError: state.auth.isLogInError,

    appinfo:state.cricketApp.appinfo,
    name:state.cricketApp.name,
  }
}

const mapDispatchToProps= dispatch=>{
  return {    
    checkCookies:()=>{
      dispatch(actions.checkCookies())
    }
  }
}

const AppContainer=connect(mapStateToProps, mapDispatchToProps)(App)


export default AppContainer