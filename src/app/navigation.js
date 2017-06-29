import React, { Component } from 'react'
import { addNavigationHelpers, StackNavigator } from 'react-navigation'
import { ReactNavigation } from '../util'
import { connect } from 'react-redux'
import  IndexView  from '../index-view'
import OverviewSubtabs from '../overview/navigation'

export const Screens = {
    indexview: 'indexview',
    overview: 'overview',
    seitei: 'seitei',
    koryu: 'koryu',
    dictionary: 'dictionary',
    overviewSubtabs: 'overviewSubtabs',
}

const mappedScreens = ReactNavigation.mapNavigationStateToProps({
    IndexView,
})

const Stack = StackNavigator(
    {        
        indexview: { screen: mappedScreens.IndexView },
        overviewSubtabs: { screen: OverviewSubtabs },
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
        state: state.navigation,
    }
}

export default connect(mapStateToProps)(Navigation)
