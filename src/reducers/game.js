import { genarateCards } from "../utils";
import {LEVEL} from "../constants"
const cards = genarateCards(LEVEL.EASY);

export const initialState = {
  initCards: cards,
  isPlaying: false,
  level: LEVEL.EASY,
  wonCount: 0,
  lostCount: 0,
  showModal: false,
  isWon: false
}
export const game = (state, action) => {
    switch (action.type) {
        case 'SET_LEVEL':
            console.log(LEVEL[action.payload.name]);

            return {
                ...state,
                level: action.payload,
                initCards: genarateCards(LEVEL[action.payload.name])
            }
        case "START_GAME" : 
        return {
            ...state,
            isPlaying: action.payload
        }
        case "WIN_GAME" : 
        return {
            ...state,
            wonCount: state.wonCount + 1,
            isPlaying: false,
            isWon: true,
            showModal: true

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
        default:
            return state
    }
}