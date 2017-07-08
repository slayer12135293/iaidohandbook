import React, { Component } from 'react'
import { View,BackHandler, StatusBar } from 'react-native'
import { addNavigationHelpers, TabNavigator } from 'react-navigation'
import { connect } from 'react-redux'
import Tab1 from './tab1'
import Tab2 from './tab2'
import Tab3 from './tab3'
import Tab4 from './tab4'
import Header from '../components/header'
import { bindActionCreators } from 'redux'
import { pop } from '../app/navigation-reducer'
import OverViewTabBar from './overview-tab-bar'
import i18n from '../i18n/index'
import Color from '../util/color'

const Tabs = TabNavigator(
    {
        tab1: { screen: Tab1 },
        tab2: { screen: Tab2 },
        tab3: { screen: Tab3 },
        tab4: { screen: Tab4 },
    },
    {
        tabBarPosition: 'bottom',
        tabBarComponent: OverViewTabBar,
        animationEnabled: true,
        swipeEnabled: false,
    }
)

class navigation extends Component {

    constructor(props) {
        super(props)
        this._onBackPress = this._onBackPress.bind(this)
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this._onBackPress)
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this._onBackPress)
    }

    _onBackPress() {
        const { pop } = this.props
        pop()
        return true
    } 

    render() {
        const { dispatch, state, pop  } = this.props
        return (
            <View style={{ flex: 1 }}>
                <StatusBar
                    translucent={true}
                    barStyle={'light-content'}
                    backgroundColor={Color.darkenByRatio(Color.globalheader, 0.2)}
                />
                <Header
                    leftIconPress={pop}
                    title={i18n.t('homeScreen.overview',null,{ capitalize: true })}
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
