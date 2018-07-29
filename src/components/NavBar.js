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
import PropTypes from "prop-types"

import { isProduction } from '../constants'


class NavBar extends Component {  
    
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
          />
        </FormGroup>{' '}
        <FormGroup>
          <ControlLabel>Password</ControlLabel>{' '}
          <FormControl
            type="password"
            placeholder="password"
            value={this.props.password}
            onChange={this.props.handlePasswordChange}
            onKeyPress={(e)=>this.props.handleKeyPress(e, this.props.username, this.props.password)}
          />
        </FormGroup>{' '}
        <Button type="submit" onClick={()=>this.props.handleLogin(this.props.username, this.props.password)}>Login</Button>
      </Navbar.Form>
    )

    const successLoginDiv = (
      <Nav pullRight>     
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

NavBar.propTypes = {
  isLoggedIn:PropTypes.bool,

  home: PropTypes.string,
  away: PropTypes.string,

  username: PropTypes.string,
  password: PropTypes.string,

  handleUsernameChange: PropTypes.func,
  handlePasswordChange: PropTypes.func,
  handleLogout: PropTypes.func,
}


export default NavBar