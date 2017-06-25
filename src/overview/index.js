import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from '../components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const Overview = () => {
    return (
        <View style={styles.container}>
            <Text> {'overview summary'} </Text>            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        backgroundColor: 'purple',
    },
    headerText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
    },
})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(dispatch)
}

export default connect(null, mapDispatchToProps)(Overview)  
