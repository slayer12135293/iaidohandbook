import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const foo = () => {
    return (
        <View style={styles.container}>
            <Text>{'this is tab-2'}</Text>
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

export default foo
