import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import { Switch } from "react-router";
import { connect } from "react-redux"
import actions from '../actions'

import {
  Nav,
  NavItem,
  Navbar,
  FormGroup,
  FormControl,
  Button,
  ControlLabel,
  Modal,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import axios from 'axios';
import Cookies from "js-cookie";

import { isProduction } from '../constants'


import WebSocketConnection from './WebSocketConnection'//del

class NavBar extends Component {
  constructor() {
    super(); 

    this.loginOnEnter = this.loginOnEnter.bind(this)
  }

  componentDidMount(){
    console.log("NAVBAR X", this.props)
  }

  loginOnEnter(e) {
    if (e.key === 'Enter') {
      console.log("13")
      this.props.onLogin();
    }
  }

    
  render() {
    const { isLoggedIn, home, away } = this.props

    const loginForm = (
      <Navbar.Form pullRight>
        <FormGroup>
          <ControlLabel>User</ControlLabel>{' '}
          <FormControl
            type="text"
            placeholder="username"
            value={this.props.username}
            onChange={this.props.handleUsernameChange}
            onKeyPress={this.loginOnEnter}
          />
        </FormGroup>{' '}
        <FormGroup>
          <ControlLabel>Password</ControlLabel>{' '}
          <FormControl
            type="password"
            placeholder="password"
            value={this.props.password}
            onChange={this.props.handlePasswordChange}
            onKeyPress={this.loginOnEnter}
          />
        </FormGroup>{' '}
        <Button type="submit" onClick={()=>this.props.handleLogin(this.props.username, this.props.password)}>Login</Button>
      </Navbar.Form>
    )

    const successLoginDiv = (
      <Nav pullRight>
        {/* <div className="alert alert-warning" style={{ position: "absolute", right: "102px", paddingTop: "5px", paddingBottom: "5px", top: "14px" }}>
            Hello, {this.state.username}!:)
          </div> */}
        <NavItem onClick={this.props.handleLogout}>
          Logout
        </NavItem>    
      </Nav>
    )

    return (
      <Navbar fluid={true}>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">ioSport Cricket Settler{home && " / "+home+" vs "+away}</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          {isLoggedIn ? successLoginDiv : loginForm}
        </Navbar.Collapse>        
      </Navbar>
    )
  }
}



export default NavBar