const speakerReducer = (state, action) => {
    function updateFavorite() {
        return state.speakerList.map((item) => {
            if (item.id === action.id) {
                return { ...item, favorite: !item.favorite }
            }

            return item
        })
    }

    switch (action.type) {
        case 'setSpeakerList': { return { ...state, speakerList: action.data, isLoading: false } }
        case 'toggle-favorite': { return { ...state, speakerList:updateFavorite() }}
        default: return state
    }
}

export default speakerReducer;