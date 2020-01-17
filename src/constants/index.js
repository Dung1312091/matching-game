const EASY = "Easy";
const NORMAL = "Normal";
const HARD = "Hard";
export const LEVEL = {
    EASY: {
        id: 1,
        name: EASY,
        cardNumber: 16,
        timer: 120 //seconds
    },
    NORMAL: {
        id: 2,
        name: NORMAL,
        cardNumber: 16,
        timer: 60 //seconds
    },
    HARD: {
        id: 3,
        name: HARD,
        cardNumber: 36,
        timer: 120 //seconds
    }
}
export const GAME_LEVEL = Object.keys(LEVEL).map((key) => {
    return LEVEL[key]
})