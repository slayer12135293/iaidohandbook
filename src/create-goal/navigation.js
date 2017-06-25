import React, { Component } from 'react'
import { addNavigationHelpers, StackNavigator } from 'react-navigation'
import { connect } from 'react-redux'
import Welcome from './welcome'
import Type from './type'
import Value from './value'
import Period from './period'
import Name from './name'
import Confirmation from './confirmation'

export const Screens = {
    welcome: 'welcome',
    typeSelection: 'typeSelection',
    valueSelection: 'valueSelection',
    periodSelection: 'periodSelection',
    name: 'name',
    confirmation: 'confirmation',
}

const Stack = StackNavigator(
    {
        welcome: { screen: Welcome },
        typeSelection: { screen: Type },
        valueSelection: { screen: Value },
        periodSelection: { screen: Period },
        name: { screen: Name },
        confirmation: { screen: Confirmation },
    },
    {
        //implement header in each scene instead (share a <Header/> component if needed)
        headerMode: 'none',
    }
)

class Navigation extends Component {
    render() {
        const { dispatch, state } = this.props
        return (
            <Stack
                navigation={addNavigationHelpers({
                    dispatch,
                    state,
                })}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        state: state.createGoalNavigation,
    }
}

export default connect(mapStateToProps)(Navigation)
