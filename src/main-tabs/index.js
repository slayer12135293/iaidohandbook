import React from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { push } from '../app/navigation-reducer'

const indexView = ({ push }) => {
    return (
        <View style={styles.container}>
            <TouchableHighlight
            >
                <Text>{'default index page'}</Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: 'white',
        borderRadius: 4,
        paddingHorizontal: 80,
        paddingVertical: 20,
    },
})

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        push,
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(indexView)
