import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
import { Switch } from "react-router";
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


class WebSocketConnection extends Component {   
    componentDidMount(){
        this.props.checkWebSocketSupp()
        this.props.establishWebSocketConnection()
    }

    componentWillUnmount(){
        const { ws } = this.props

        if(ws!==undefined){
          this.props.closeWebSocketConnection(ws)
        }      
    }   

    render() {
        return this.props.children
        
    }
}



export default WebSocketConnection

