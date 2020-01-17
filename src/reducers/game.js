import { genarateCards } from "../utils";
import {LEVEL} from "../constants"
const cards = genarateCards(LEVEL.Easy);

export const initialState = {
  initCards: cards,
  isPlaying: false,
  level: LEVEL.Easy,
  wonCount: 0,
  lostCount: 0,
  showModal: false,
  isWon: false,
  timeStart: 0,
  timeRemain: {}
}
export const game = (state, action) => {
    switch (action.type) {
        case 'SET_LEVEL':
            return {
                ...state,
                level: action.payload,
                initCards: genarateCards(LEVEL[action.payload.name])
            }
        case "START_GAME" :   
        return {
            ...state,
            isPlaying: action.payload,
            timeStart: Date.now()
        }
        case "WIN_GAME" :
        const remain = Date.now() - state.timeStart;
        const bestTime = state.timeRemain[state.level.name] || Date.now();
        console.log("remain===>",remain);
        console.log("bestTime===>",bestTime);

        
        return {
            ...state,
            wonCount: state.wonCount + 1,
            isPlaying: false,
            isWon: true,
            showModal: true,
            timeRemain: {
                ...state.timeRemain,
                [state.level.name]:  remain < bestTime ? remain : bestTime
            },
    


        }
        case "LOST_GAME" : 
        return {
            ...state,
            lostCount: state.wonCount + 1,
            isPlaying: false,
            showModal: true,
            isWon: false

        }
        case "SHOW_MODAL_MASSAGE": {
            return {
                ...state,
                showModal: action.payload
    
            }
        }
        case "PLAY_AGAIN": {
            return {
                ...state,
                showModal: false,
                isWon: false,
                isPlaying: true,
                initCards: genarateCards(LEVEL[state.level.name]),
                timeStart: Date.now()
    
            }
        }
        case "PLAY_DIFF_LEVEL": {
            return {
                ...state,
                showModal: false,
                isWon: false,
                isPlaying: false,
                initCards: genarateCards(LEVEL[state.level.name])
            }
        }
        default:
            return state
    }
}