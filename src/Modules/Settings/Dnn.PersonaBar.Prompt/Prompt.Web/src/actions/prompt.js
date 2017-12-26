import { prompt as ActionTypes } from "../constants/actionTypes";
import ApplicationService from "../services/applicationService";

export function getCommandList(payload, callback, errorCallback) {
    return (dispatch) => {
        ApplicationService.runCommand(payload, data => {
            dispatch({
                type: ActionTypes.RETRIEVED_COMMAND_LIST,
                data: {
                    commands: data.data
                }
            });
            if (callback) {
                callback(data.data);
            }
        }, data => {
            if (errorCallback) {
                errorCallback(data);
            }
        });
    };
}
export function runCommand(payload, callback, errorCallback) {
    return (dispatch) => {
        ApplicationService.runCommand(payload, data => {
            dispatch({
                type: ActionTypes.EXECUTED_COMMAND,
                data: {
                    result: data
                }
            });
            if (callback) {
                callback(data);
            }
        }, data => {
            if (errorCallback) {
                errorCallback(data);
            }
        });
    };
}
export function runHelpCommand(payload, callback, errorCallback) {
    return (dispatch) => {
        ApplicationService.runCommand(payload, data => {
            dispatch({
                type: ActionTypes.EXECUTED_HELP_COMMAND,
                data: {
                    result: data
                }
            });
            if (callback) {
                callback(data);
            }
        }, data => {
            if (errorCallback) {
                errorCallback(data);
            }
        });
    };
}
export function runLocalCommand(command, output, style) {
    return (dispatch) => {
        dispatch({
            type: ActionTypes.EXECUTED_LOCAL_COMMAND,
            command: command,
            output: output,
            style: style
        });
    };
}
export function endPaging() {
    return (dispatch) => {
        dispatch({
            type: ActionTypes.END_PAGING
        });
    };
}
export function changeUserMode(payload, callback, errorCallback) {
    return (dispatch) => {
        ApplicationService.changeUserMode(payload, data => {
            dispatch({
                type: ActionTypes.CHANGE_USER_MODE,
                data: {
                    result: data
                }
            });
            if (callback) {
                callback(data);
            }
        }, data => {
            if (errorCallback) {
                errorCallback(data);
            }
        });
    };
}