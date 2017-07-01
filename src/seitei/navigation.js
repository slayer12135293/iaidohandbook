import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from '../components'
import { addNavigationHelpers, TabNavigator } from 'react-navigation'
import { connect } from 'react-redux'
import Tab1 from './tab1'
import Tab2 from './tab2'
import Header from '../components/header'
import { bindActionCreators } from 'redux'
import { pop } from '../app/navigation-reducer'
import SeiteiTabBar from './seitei-tab-bar'
import Color from '../util/color'
import i18n from '../i18n/index'

const Tabs = TabNavigator(
    {
        tab1: { screen: Tab1 },
        tab2: { screen: Tab2 },
    },
    {
        tabBarPosition: 'bottom',
        tabBarComponent: SeiteiTabBar,
        animationEnabled: true,
    }
)

const navigation = ({ dispatch, state, pop }) => {
    return (
        <View style={{ flex: 1 }}>
            <Header
                leftIconPress={pop}
                title={'Seitei Iaido'}
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
        state: state.seiteiSubtabs,
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        pop,
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(navigation)
