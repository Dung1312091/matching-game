
export const LEVEL = {
    Easy: {
        id: 1,
        name: "Easy",
        cardNumber: 4,
        timer: 120 //seconds
    },
    Normal: {
        id: 2,
        name: "Normal",
        cardNumber: 2,
        timer: 160 //seconds
    },
    Hard: {
        id: 3,
        name: "Hard",
        cardNumber: 36,
        timer: 120 //seconds
    }
}
export const GAME_LEVEL = Object.keys(LEVEL).map((key) => {
    return LEVEL[key]
})