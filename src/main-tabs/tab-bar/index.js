import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { bindActionCreators } from 'redux'
import { jumpTo } from '../navigation-reducer'
import { connect } from 'react-redux'

const tabs = [
    { routeName: 'foo', icon: 'home' },
    { routeName: 'bar', icon: 'account-balance' },
    { routeName: 'baz', icon: 'account-circle' },
    { routeName: 'fubar', icon: 'settings' },
]

const TabBar = ({ jumpTo }) => {

    return (
        <View style={styles.container}>
            {tabs.map(tab => (
                <TouchableOpacity
                    key={tab.routeName}
                    style={styles.tab}
                    onPress={() => jumpTo(tab.routeName)}
                >
                    <Icon name={tab.icon} style={styles.icon}/>
                </TouchableOpacity>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingHorizontal: 20,
    },
    tab: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        fontSize: 30,
    },
})

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        jumpTo,
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(TabBar)
