const speakerReducer = (state, action) => {
    function updateFavorite(favoriteValue) {
        return state.speakerList.map((item) => {
            if (item.id === action.sessionId) {
                return { ...item, favorite: favoriteValue }
            }

            return item
        })
    }

    switch (action.type) {
        case 'setSpeakerList': { return { ...state, speakerList: action.data, isLoading: false } }
        case 'favorite': { return { ...state, speakerList:updateFavorite(true) }}
        case 'unfavorite': { return { ...state, speakerList:updateFavorite(false) }}
        default: return state
    }
}

export default speakerReducer;