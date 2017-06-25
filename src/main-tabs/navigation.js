import React, { Component } from 'react'
import { addNavigationHelpers, TabNavigator } from 'react-navigation'
import TabBar from './tab-bar'
import Bar from './bar'
import Baz from './baz'
import Fubar from './fubar'
import Feed from './feed/feed'
import { connect } from 'react-redux'

const Tabs = TabNavigator(
    {
        foo: { screen: Feed },
        bar: { screen: Bar },
        baz: { screen: Baz },
        fubar: { screen: Fubar },
    },
    {
        animationEnabled: false,
        tabBarPosition: 'bottom',
        tabBarComponent: TabBar,
    }
)

class Navigation extends Component {

    render() {
        const { dispatch, state } = this.props

        return (
            <Tabs
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
        state: state.tabs,
    }
}

export default connect(mapStateToProps)(Navigation)
