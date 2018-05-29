/*Authentication*/
export const AUTH_START = 'AUTH_START';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAIL = 'AUTH_FAIL';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';
export const CHECK_COOKIES="CHECK_COOKIES"
export const REMOVE_COOKIES="REMOVE_COOKIES"

export const SET_USERNAME="SET_USERNAME"
export const SET_PASSWORD="SET_PASSWORD"

/*Websocket*/
export const OPEN_WEBSOCKET="OPEN_WEBSOCKET"
export const CLOSE_WEBSOCKET="CLOSE_WEBSOCKET"
export const CLOSED_WEBSOCKET="CLOSED_WEBSOCKET"
export const CHECK_WEBSOCKET_EXIST="CHECK_WEBSOCKET_EXIST"
export const NOT_SUPPORT_WEBSOCKET="NOT_SUPPORT_WEBSOCKET"
export const WEBSOCKET_SUCCESS="WEBSOCKET_SUCCESS"
export const WEBSOCKET_ERR="WEBSOCKET_ERR"

/*For Values used for settling*/
export const SET_FINAL_MO="SET_FINAL_MO"
export const SET_FINAL_LAMBI="SET_FINAL_LAMBI"
export const SET_FINAL_FANCY_1_6="SET_FINAL_FANCY_1_6"
export const SET_FINAL_FANCY_1_12="SET_FINAL_FANCY_1_12"
export const SET_FINAL_FANCY_2_6="SET_FINAL_FANCY_2_6"
export const SET_FINAL_FANCY_2_12="SET_FINAL_FANCY_2_12"

/*Initial setting*/
export const SET_MATCH_ODDS="SET_MATCH_ODDS"
export const SET_LAMBI="SET_LAMBI"
export const SET_FANCY_1_6="SET_FANCY_1_6"
export const SET_FANCY_1_12="SET_FANCY_1_12"
export const SET_FANCY_2_6="SET_FANCY_2_6"
export const SET_FANCY_2_12="SET_FANCY_2_12"

/*General game info*/
export const SET_HOME="SET_HOME"
export const SET_AWAY="SET_AWAY"
export const SET_APP_INFO="SET_APP_INFO"
export const SET_NAME="SET_NAME"

/*Settler Modal*/
export const INIT_SETTLE_MODAL="INIT_SETTLE_MODAL"
export const SHOW_SETTLE_MODAL="SHOW_SETTLE_MODAL"
export const HIDE_SETTLE_MODAL="HIDE_SETTLE_MODAL"
export const RESET_SETTLE_MODAL_STATE="RESET_SETTLE_MODAL_STATE"
export const SET_SETTLE_MODAL_TO_SETTLE_STATE="SET_SETTLE_MODAL_TO_SETTLE_STATE"
export const SET_SETTLE_MODAL_TO_VOID_STATE="SET_SETTLE_MODAL_TO_VOID_STATE"
export const SET_SETTLE_MODAL_FINAL_MARKET_VALUE="SET_SETTLE_MODAL_FINAL_MARKET_VALUE"
export const SET_SETTLE_MODAL_FINAL_MARKET_SELECTED="SET_SETTLE_MODAL_FINAL_MARKET_SELECTED"

/*ActionBtn state after action is performed*/
export const SETTLED_MATCH_ODDS="SETTLED_MATCH_ODDS"
export const VOIDED_MATCH_ODDS="VOIDED_MATCH_ODDS"

export const SETTLED_LAMBI="SETTLED_LAMBI"
export const VOIDED_LAMBI="VOIDED_LAMBI"

export const SETTLED_FANCY_1_6="SETTLED_FANCY_1_6"
export const VOIDED_FANCY_1_6="VOIDED_FANCY_1_6"

export const SETTLED_FANCY_1_12="SETTLED_FANCY_1_12"
export const VOIDED_FANCY_1_12="VOIDEDWebSocketConnectionContainer_FANCY_1_12"

export const SETTLED_FANCY_2_6="SETTLED_FANCY_2_6"
export const VOIDED_FANCY_2_6="VOIDED_FANCY_2_6"

export const SETTLED_FANCY_2_12="SETTLED_FANCY_2_12"
export const VOIDED_FANCY_2_12="VOIDED_FANCY_2_12"

/*jtk sending started*/
export const INIT_SETTLE_MATCH_ODDS_SEND_WS="INIT_SETTLE_MATCH_ODDS_SEND_WS"
export const INIT_VOID_MATCH_ODDS_SEND_WS="INIT_VOID_MATCH_ODDS_SEND_WS"

export const INIT_SETTLE_LAMBI_SEND_WS="INIT_SETTLE_LAMBI_SEND_WS"
export const INIT_VOID_LAMBI_SEND_WS="INIT_VOID_LAMBI_SEND_WS"

export const INIT_SETTLE_FANCY_1_6_SEND_WS="INIT_SETTLE_FANCY_1_6_SEND_WS"
export const INIT_VOID_FANCY_1_6_SEND_WS="INIT_VOID_FANCY_1_6_SEND_WS"

export const INIT_SETTLE_FANCY_1_12_SEND_WS="INIT_SETTLE_FANCY_1_12_SEND_WS"
export const INIT_VOID_FANCY_1_12_SEND_WS="INIT_VOID_FANCY_1_12_SEND_WS"

export const INIT_SETTLE_FANCY_2_6_SEND_WS="INIT_SETTLE_FANCY_2_6_SEND_WS"
export const INIT_VOID_FANCY_2_6_SEND_WS="INIT_VOID_FANCY_2_6_SEND_WS"

export const INIT_SETTLE_FANCY_2_12_SEND_WS="INIT_SETTLE_FANCY_2_12_SEND_WS"
export const INIT_VOID_FANCY_2_12_SEND_WS="INIT_VOID_FANCY_2_12_SEND_WS"

/*On ActionBtn action buttons - settler/void*/
export const SHOW_MATCH_ODDS_ACTION="SHOW_MATCH_ODDS_ACTION"
export const HIDE_MATCH_ODDS_ACTION="HIDE_MATCH_ODDS_ACTION"

export const SHOW_LAMBI_ACTION="SHOW_LAMBI_ACTION"
export const HIDE_LAMBI_ACTION="HIDE_LAMBI_ACTION"

export const SHOW_FANCY_1_6_ACTION="SHOW_FANCY_1_6_ACTION"
export const HIDE_FANCY_1_6_ACTION="HIDE_FANCY_1_6_ACTION"

export const SHOW_FANCY_1_12_ACTION="SHOW_FANCY_1_12_ACTION"
export const HIDE_FANCY_1_12_ACTION="HIDE_FANCY_1_12_ACTION"

export const SHOW_FANCY_2_6_ACTION="SHOW_FANCY_2_6_ACTION"
export const HIDE_FANCY_2_6_ACTION="HIDE_FANCY_2_6_ACTION"

export const SHOW_FANCY_2_12_ACTION="SHOW_FANCY_2_12_ACTION"
export const HIDE_FANCY_2_12_ACTION="HIDE_FANCY_2_12_ACTION"

/*Batsmen Market *///smth similar exists already???
export const SET_HOME_TEAM="SET_HOME_TEAM"
export const SET_AWAY_TEAM="SET_AWAY_TEAM"

/*for buttons on ActionBtn - settle/void*/
export const SHOW_HOME_TEAM_BATSMAN_ACTION="SHOW_HOME_TEAM_BATSMAN_ACTION"
export const HIDE_HOME_TEAM_BATSMAN_ACTION="HIDE_HOME_TEAM_BATSMAN_ACTION"

export const SHOW_AWAY_TEAM_BATSMAN_ACTION="SHOW_AWAY_TEAM_BATSMAN_ACTION"
export const HIDE_AWAY_TEAM_BATSMAN_ACTION="HIDE_AWAY_TEAM_BATSMAN_ACTION"

/*Val to be settled*/
export const SET_FINAL_HOME_TEAM_BATSMAN_VALUE="SET_FINAL_HOME_TEAM_BATSMAN_VALUE"
export const SET_FINAL_AWAY_TEAM_BATSMAN_VALUE="SET_FINAL_AWAY_TEAM_BATSMAN_VALUE"

export const INIT_SETTLE_HOME_TEAM_BATSMAN_SEND_WS="INIT_SETTLE_HOME_TEAM_BATSMAN_SEND_WS"
export const INIT_VOID_HOME_TEAM_BATSMAN_SEND_WS="INIT_VOID_HOME_TEAM_BATSMAN_SEND_WS"
export const SETTLED_HOME_TEAM_BATSMAN="SETTLED_HOME_TEAM_BATSMAN"
export const VOIDED_HOME_TEAM_BATSMAN="VOIDED_HOME_TEAM_BATSMAN"

export const INIT_SETTLE_AWAY_TEAM_BATSMAN_SEND_WS="INIT_SETTLE_AWAY_TEAM_BATSMAN_SEND_WS"
export const INIT_VOID_AWAY_TEAM_BATSMAN_SEND_WS="INIT_VOID_AWAY_TEAM_BATSMAN_SEND_WS"
export const SETTLED_AWAY_TEAM_BATSMAN="SETTLED_AWAY_TEAM_BATSMAN"
export const VOIDED_AWAY_TEAM_BATSMAN="VOIDED_AWAY_TEAM_BATSMAN"

export const SET_HOME_TEAM_SELECTED_BATSMAN_INDEX="SET_HOME_TEAM_SELECTED_BATSMAN_INDEX"
export const SET_AWAY_TEAM_SELECTED_BATSMAN_INDEX="SET_AWAY_TEAM_SELECTED_BATSMAN_INDEX"