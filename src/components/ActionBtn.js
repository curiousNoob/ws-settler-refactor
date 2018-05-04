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


const ActionBtn = ({ 
    isVoided,
    isSettled,

    showAction,
    hideAction,

    status,
    isShowAction,

    onAction,

    marketType,

})  => {

    let actionBtn

    const labelStyleObj = {
        "inactive": "info",
        "active": "danger",
        "ready_to_settle": "warning",
        "settled": "success"
    }

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
                                    onClick={() => { onAction("settle", marketType) }}
                                >Settle
                                </Button>
                            }
                            {' '}
                            {
                                (status === "active" || status === "ready_to_settle") &&
                                <Button
                                    bsStyle="info"
                                    onClick={() =>{ onAction("void", marketType)}}
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

export default ActionBtn