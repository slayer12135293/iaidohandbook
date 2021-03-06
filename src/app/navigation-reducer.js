import Util from '../util/index'
import { StateUtils } from 'react-navigation'

const PUSH = 'PUSH_MAIN'
const POP  = 'POP_MAIN'
const RESET  = 'RESET_MAIN'

const initialState = {
    index: 0,
    routes: [
        { key: 'index', routeName: 'indexview' },
    ],
}

export const push = (routeName, props) => {
    return {
        type: PUSH,
        route: {
            key: `${routeName}-${Util.getUuid()}`,
            routeName,
            ...props,
        },
    }
}

export const pop = () => {
    return {
        type: POP,
    }
}

export const reset = () => {
    return {
        type: RESET,
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case PUSH:
            return StateUtils.push(state, action.route)
        case POP:
            return StateUtils.pop(state)
        case RESET:
            return initialState
        default:
            return state
    }
}

export default reducer
