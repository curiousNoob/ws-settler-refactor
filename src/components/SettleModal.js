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
import PropTypes from "prop-types"

import SettleThead from './SettleThead'
import SettleTbody from './SettleTbody'
import TableNavigation from './TableNavigation'

import { isProduction } from '../constants'


const SettleModal = ({ 
  showModal,
  handleHide,

  isSettle,
  isVoid,

  marketType,
  finalValue,
  
  settleAction, 
}) => (
  <Modal bsSize="small" show={showModal} onHide={handleHide}>
    <Modal.Body>
      {
        isSettle ? 
          (<div>SETTLE {marketType} 	&#8608;  <strong>{finalValue}</strong></div>):
          (isVoid ? 
            `VOID ${marketType}` : "none")
      }
    </Modal.Body>

    <Modal.Footer>
      <Button bsStyle="success" onClick={settleAction}>Yes</Button>
      <Button bsStyle="danger" onClick={handleHide}>No</Button>
    </Modal.Footer>
  </Modal> 
)

SettleModal.propTypes={
  showModal: PropTypes.bool,
  handleHide: PropTypes.func,

  isSettle: PropTypes.bool,
  isVoid: PropTypes.bool,

  marketType: PropTypes.string,
  finalValue: PropTypes.string,
  
  settleAction: PropTypes.func, 
}
  

export default SettleModal