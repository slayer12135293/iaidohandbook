import React, { Component } from 'react'
import { addNavigationHelpers, StackNavigator } from 'react-navigation'
import { ReactNavigation } from '../util'
import { connect } from 'react-redux'
import  IndexView  from '../index-view'
import  WordListView  from '../word-list'
import OverviewSubtabs from '../overview/navigation'
import SeiteiSubtabs from '../seitei/navigation'
import MusoshindenSubtabs from '../koryu/muso-shinden/navigation'

export const Screens = {
    indexview: 'indexview',
    dictionary: 'dictionary',
    overviewSubtabs: 'overviewSubtabs',
    seiteiSubtabs: 'seiteiSubtabs',
    musoshindenSubtabs: 'musoshindenSubtabs',
    wordList: 'wordList',
}

const mappedScreens = ReactNavigation.mapNavigationStateToProps({
    IndexView,
    WordListView,
})

const Stack = StackNavigator(
    {        
        indexview: { screen: mappedScreens.IndexView },
        wordList: { screen: mappedScreens.WordListView },
        overviewSubtabs: { screen: OverviewSubtabs },
        seiteiSubtabs: { screen: SeiteiSubtabs },
        musoshindenSubtabs: { screen: MusoshindenSubtabs },
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
