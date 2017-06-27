import React from 'react'
import { StyleSheet, TouchableHighlight, View } from 'react-native'
import { Text } from '../components'
import { bindActionCreators } from 'redux'
import { jumpTo } from './navigation-reducer'
import { connect } from 'react-redux'

const tabs = [
    { key: 'tab1', text: 'Tab1' },
    { key: 'tab2', text: 'Tab2' },
]

const OverviewTabBar = ({ jumpTo }) => {
    return (
        <View style={styles.container}>
            {tabs.map(tab => (
                <TouchableHighlight
                    key={tab.key}
                    onPress={() => jumpTo(tab.key)}
                    style={{ flex: 1, height: 50, justifyContent: 'center' }}
                >
                    <Text style={styles.text}>
                        {tab.text}
                    </Text>
                </TouchableHighlight>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        backgroundColor: 'purple',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
})

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        jumpTo,
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(OverviewTabBar)
