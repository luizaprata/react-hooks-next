import { useCallback, useEffect, useReducer } from "react";

import speakerReducer from "../src/speakerReducer";


function useSpeakerDataManager() {
    const [{ isLoading, speakerList }, dispatch] = useReducer(speakerReducer, { isLoading: true, speakerList: [] })

    useEffect(() => {
        new Promise((resolve) => {
            setTimeout(() => resolve(), 1000)
        }).then(() => dispatch({ type: 'setSpeakerList', data: [{ id: 1, name: "luiza" }, { id: 123, name: "antonio" }] }))
    }, [])

    const favoriteHandler = useCallback((e) => {
        e.preventDefault();
        const sessionId = parseInt(e.target.attributes['data-id'].value)

        dispatch({
            type: 'toggle-favorite',
            id: sessionId
        })
    })

    return { isLoading, speakerList, favoriteHandler }
}

export default useSpeakerDataManager