import { StateUtils } from 'react-navigation'

const JUMP_TO = 'JUMP_TO'

const initialState = {
    index: 0,
    routes: [
        { key: 'indexView', routeName: 'indexView' },
        { key: 'overview', routeName: 'overview' },
        { key: 'seitei', routeName: 'seitei' },
        { key: 'koryu', routeName: 'koryu' },
        { key: 'dictionary', routeName: 'dictionary' },
    ],
}

export const jumpTo = key => {
    return {
        type: JUMP_TO,
        key,
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case JUMP_TO:
            return StateUtils.jumpTo(state, action.key)
        default:
            return state
    }
}

export default reducer
