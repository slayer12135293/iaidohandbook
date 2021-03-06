import { StateUtils } from 'react-navigation'
const JUMP_TO = 'JUMP_TO_MUSOSHINDEN_TABS_OVERVIEW'
const RESET = 'RESET_MUSOSHINDEN_TABS_OVERVIEW'

const initialState = {
    index: 0,
    routes: [
        { key: 'tab1', routeName: 'tab1' },
        { key: 'tab2', routeName: 'tab2' },
        // { key: 'tab3', routeName: 'tab3' },
        // { key: 'tab4', routeName: 'tab4' },
    ],
}

export const jumpTo = key => {
    return {
        type: JUMP_TO,
        key,
    }
}

export const reset = () => {
    return {
        type: RESET,
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case JUMP_TO:
            return StateUtils.jumpTo(state, action.key)
        case RESET:
            return initialState
        default:
            return state
    }
}

export default reducer
