import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const tab1 = () => {
    return (
        <View style={styles.container}>
            <Text>{'this is tab-1'}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default tab1
