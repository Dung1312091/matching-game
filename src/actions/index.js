export function setLevel (payload) {
    return {
        type: "SET_LEVEL",
        payload
    }
}

export function startGame(  payload) {
    return {
        type: "START_GAME",
        payload
    }
}

export function winGame(  payload) {
    return {
        type: "WIN_GAME",
        payload
    }
}
export function lostGame(  payload) {
    return {
        type: "LOST_GAME",
        payload
    }
}
export function showModalMessage(  payload) {
    return {
        type: "SHOW_MODAL_MASSAGE",
        payload
    }
}
export function playAgain(  payload) {
    return {
        type: "PLAY_AGAIN",
        payload
    }
}

export function playDiffLevel(  payload) {
    return {
        type: "PLAY_DIFF_LEVEL",
        payload
    }
}