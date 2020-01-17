export const game = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return [
                ...state,
                action.payload,
            ]
        case 'CLEAR':
            return []
        case 'DISMISS':
            return state.filter((message, index) => index !== action.payload)
        default:
            return state
    }
}