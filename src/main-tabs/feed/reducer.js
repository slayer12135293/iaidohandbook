import Api from '../../util/api'
import * as dateFns from 'date-fns'
import { createSelector } from 'reselect'

const SAVE_FEED   = 'SAVE_FEED'
const SAVE_INCOME = 'SAVE_INCOME'

export const fetchFeed = (fromDate, toDate) => {
    return async dispatch => {
        dispatch(fetchAggregate('income', fromDate, toDate))
        dispatch(fetchAggregate('cost', fromDate, toDate))
        dispatch(fetchAggregate('result', fromDate, toDate))
        dispatch(fetchAggregate('cashandbank', fromDate, toDate))
    }
}

const fetchAggregate = (type, fromDate, toDate) => {
    return async dispatch => {

        fromDate = dateFns.format(fromDate, 'YYYY-MM')
        toDate   = dateFns.format(toDate, 'YYYY-MM')

        const aggregate = await Api.get(Api.ENDPOINTS.aggregates(type, fromDate, toDate))
        
        const periodData = {
            aggregate: Object.entries(aggregate).map(([ period, value ]) => ({ period, ...value })),
            fromDate,
            toDate,
        }

        dispatch(savePeriodData(periodData, type))
    }
}

const savePeriodData = (periodData, type) => {
    return {
        type: `SAVE_${type.toUpperCase()}`,
        periodData,
    }
}

const initialState = {
    income: {},
    cost: {},
    cashAndBank: {},
    result: {},
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_FEED:
            return {
                ...state,
                feed: action.feed,
            }
        case SAVE_INCOME:
            return {
                ...state,
                income: action.periodData,
            }
        case 'SAVE_COST':
            return {
                ...state,
                cost: action.periodData,
            }
        case 'SAVE_CASHANDBANK':
            return {
                ...state,
                cashAndBank: action.periodData,
            }
        case 'SAVE_RESULT':
            return {
                ...state,
                result: action.periodData,
            }
        default:
            return state
    }
}

const _getIncome      = state => state.feed.income
const _getCost        = state => state.feed.cost
const _getResult      = state => state.feed.result
const _getCashAndBank = state => state.feed.cashAndBank

export const getTotal = (periodData) => {
    if (!periodData.aggregate) {
        return 0
    }
    
    return Object.values(periodData.aggregate)
        .reduce((prev, obj) => prev + obj.transactionSum, 0)
}

export const getAggregate = (type, state) => {
    const periodData = state.feed[ type ]
    return {
        ...periodData,
        total: getTotal(periodData),
    }
}

export const getFeed = createSelector(
    [
        _getIncome,
        _getCost,
        _getResult,
        _getCashAndBank,
    ],
    (income, cost, result, cashAndBank) => {
        return [
            {
                title: 'income',
                total: getTotal(income),
                ...income,
            },
            {
                title: 'costs',
                total: getTotal(cost),
                ...cost,
            },
            {
                title: 'result',
                total: getTotal(result),
                ...result,
            },
            {
                title: 'money_and_bank',
                total: getTotal(cashAndBank),
                ...cashAndBank,
            },
        ]
    }
)

export default reducer
