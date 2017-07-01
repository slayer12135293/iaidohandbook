import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import navigation from '../app/navigation-reducer'
import overviewSubtabs from '../overview/navigation-reducer'
import seiteiSubtabs from '../seitei/navigation-reducer'
import musoshindenSubtabs from '../koryu/muso-shinden/navigation-reducer'

const logger = createLogger({
    predicate: () => __DEV__,
    diff: true,
})

const Store = createStore(
    combineReducers({
        navigation,
        overviewSubtabs,
        seiteiSubtabs,
        musoshindenSubtabs,
    }),
    applyMiddleware(
        thunk,
        logger,
    )
)

export default Store
