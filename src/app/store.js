import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import navigation from '../app/navigation-reducer'
import overviewSubtabs from '../overview/navigation-reducer'

const logger = createLogger({
    predicate: () => __DEV__,
    diff: true,
})

const Store = createStore(
    combineReducers({
        navigation,
        overviewSubtabs,
    }),
    applyMiddleware(
        thunk,
        logger,
    )
)

export default Store
