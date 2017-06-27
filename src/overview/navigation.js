import React from 'react'
import { View } from 'react-native'
import { Text } from '../components'
import { addNavigationHelpers, TabNavigator } from 'react-navigation'
import { connect } from 'react-redux'
import Tab1 from './tab1'
import Tab2 from './tab2'
import Header from '../components/header'
import { bindActionCreators } from 'redux'
import { pop } from '../app/navigation-reducer'
import OverViewTabBar from './overview-tab-bar'

const Tabs = TabNavigator(
    {
        tab1: { screen: Tab1 },
        tab2: { screen: Tab2 },
    },
    {
        tabBarPosition: 'bottom',
        tabBarComponent: OverViewTabBar,
        animationEnabled: true,
    }
)

const navigation = ({ dispatch, state, pop }) => {
    return (
        <View style={{ flex: 1 }}>
            <Header
                leftIconPress={pop}
                iconStyle={{ color: 'white' }}
                style={{ backgroundColor: 'purple' }}
            >
                <Text style={{ color: 'white' }}>
                    {'subTabs'}
                </Text>
            </Header>
            <Tabs
                navigation={addNavigationHelpers({
                    dispatch,
                    state,
                })}
            />
        </View>
    )
}

const mapStateToProps = state => {
    return {
        state: state.overviewSubtabs,
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        pop,
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(navigation)
