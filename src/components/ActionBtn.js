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
    Label,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import axios from 'axios';
import Cookies from "js-cookie";
import PropTypes from "prop-types"


const ActionBtn = ({ 
    isVoided,
    isSettled,

    showAction,
    hideAction,

    status,
    isShowAction,

    onAction,

})  => {

    let actionBtn


    const badgeSignal = {
        "inactive": "..",
        "active": "V",
        "ready_to_settle": "S/V",
        "settled": "-"
    }


    if (isVoided) {
        actionBtn = <Button bsStyle="info">Void</Button>
    } else if (isSettled) {
        actionBtn = <Button bsStyle="success">Settle</Button>
    } else {
        actionBtn = (
            <div style={{ position: "relative" }} className="btn-action" onMouseLeave={hideAction}>
                <Button
                    bsStyle="danger"
                    onMouseEnter={showAction}
                >
                    Action{' '}
                    <span className="badge">
                        {
                            badgeSignal[status]
                        }
                    </span>
                </Button>
                {
                    isShowAction && (
                        <div style={{ position: "absolute", zIndex: 999, top: 0 }}>
                            {
                               status === "ready_to_settle" &&
                                <Button
                                    bsStyle="success"
                                    onClick={() => { onAction("settle") }}
                                >Settle
                                </Button>
                            }
                            {' '}
                            {
                                (status === "active" || status === "ready_to_settle") &&
                                <Button
                                    bsStyle="info"
                                    onClick={() =>{ onAction("void")}}
                                    style={status === "active" ? { width: "101px" } : {}}
                                >Void</Button>
                            }
                        </div>
                    )
                }
            </div>
        )
    }
   

    return (
        actionBtn
    )
}

ActionBtn.propTypes = {
    isVoided: PropTypes.bool,
    isSettled: PropTypes.bool,

    showAction: PropTypes.func,
    hideAction: PropTypes.func,

    status:  PropTypes.oneOf([
        "inactive", 
        "active", 
        "ready_to_settle", 
        "settled"
    ]).isRequired,

    isShowAction: PropTypes.bool,

    onAction: PropTypes.func,

}

export default ActionBtn