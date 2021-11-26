import { useCallback, useEffect, useReducer } from "react";

import speakerReducer from "../src/speakerReducer";


function useSpeakerDataManager() {
    const [{ isLoading, speakerList }, dispatch] = useReducer(speakerReducer, { isLoading: true, speakerList: [] })

    useEffect(() => {
        new Promise((resolve) => {
            setTimeout(() => resolve(), 1000)
        }).then(() => dispatch({ type: 'setSpeakerList', data: [{ id: 1, name: "luiza" }, { id: 123, name: "antonio" }] }))
    }, [])

    const toggleFavorite = useCallback((speaker) => {

        dispatch({
            type: speaker.favorite ? 'unfavorite' : 'favorite',
            id: speaker.id
        })
    })

    return { isLoading, speakerList, toggleFavorite }
}

export default useSpeakerDataManager