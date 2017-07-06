import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from '../../components'
import { addNavigationHelpers, TabNavigator } from 'react-navigation'
import { connect } from 'react-redux'
import Tab1 from './tab1'
import Tab2 from './tab2'
import Header from '../../components/header'
import { bindActionCreators } from 'redux'
import { pop } from '../../app/navigation-reducer'
import { reset } from './navigation-reducer'
import MusoshindenTabBar from './musoshinden-tab-bar'
import Color from '../../util/color'
import i18n from '../../i18n/index'

const Tabs = TabNavigator(
    {
        tab1: { screen: Tab1 },
        tab2: { screen: Tab2 },
    },
    {
        tabBarPosition: 'bottom',
        tabBarComponent: MusoshindenTabBar,
        animationEnabled: true,
        lazy: true,
        swipeEnabled: false,
        initialRouteName: 'tab2',
    }
)

const navigation = ({ dispatch, state, pop, reset }) => {
    return (
        <View style={{ flex: 1 }}>
            <Header
                leftIconPress={ pop }
                title={'Musō Shinden-ryū'}
                iconStyle={{ color: 'white' }}
                
            />
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
        state: state.musoshindenSubtabs,
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        pop,
        reset,
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(navigation)
