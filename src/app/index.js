import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { View } from 'react-native'
import store from './store'
import { Text } from '../components'
import Navigation from './navigation'
import IndexView from '../index-view'
class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <Navigation/>
            </Provider>
            // <View>
            //     <Text>asdfasdfasdf</Text>
            // </View>
            // <Provider store={store}>
            //     <IndexView/>
            // </Provider>
            
        )
    }
}

export default App
