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

import SettleThead from './SettleThead'
import SettleTbody from './SettleTbody'
import TableNavigation from './TableNavigation'

import { isProduction } from '../constants'

console.log("HERE")

class SettleModal extends Component {
  

  render() {
    // console.log("Cookies.get", Cookies.get('cricket~settler'))

    return (    
        <Modal bsSize="small" show={this.props.showModal} onHide={this.props.handleHide}>
          <Modal.Body>
            {
              this.props.isSettle ? 
                `Settle ${this.props.marketType} @ ` + this.props.finalValue : 
                (this.props.isVoid ? 
                  `Void ${this.props.marketType}` : "none")
            }
          </Modal.Body>

          <Modal.Footer>
            <Button bsStyle="success" onClick={this.props.settleAction}>Yes</Button>
            <Button bsStyle="danger" onClick={this.props.handleHide}>No</Button>
          </Modal.Footer>
        </Modal>

    );
  }
}


export default SettleModal