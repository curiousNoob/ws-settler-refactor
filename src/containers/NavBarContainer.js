
import { connect } from "react-redux"


import actions from '../actions'
import NavBar from '../components/NavBar'


const mapStateToProps = state =>{
  console.log("mapStateToProps",state)
  return {
    username: state.auth.username,
    password: state.auth.password,
    isLoading: state.auth.isLoading,
    isLoggedIn: state.auth.isLoggedIn,
    isLogInError: state.auth.isLogInError,
  }
}

const mapDispatchToProps= dispatch=>{

  return {
    handleUsernameChange:(e) =>{
      const username=e.target.value
      dispatch(actions.setUsername(username))
    },
    handlePasswordChange:(e)=>{
      const password=e.target.value
      dispatch(actions.setPassword(password))
    },
    handleLogin:(username, password)=>{
      dispatch(actions.auth(username, password))
    },
    handleLogout:()=>{
      dispatch(actions.rmCookies())
      dispatch(actions.logout())
    },   
  }
}

console.log("ACTIONS--->", actions)

const NavbarContainer=connect(mapStateToProps, mapDispatchToProps)(NavBar)

export default NavbarContainer