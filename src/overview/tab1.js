import React from 'react'
import { ScrollView, View, Text, StyleSheet } from 'react-native'
import i18n from '../i18n/index'

const tab1 = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.textWrapper}>                
                <Text style={styles.text}>{i18n.t('overview.intro.text1')}</Text>
            </Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    textWrapper: {
        textAlign: 'justify',
        padding:10,
    },
    text:{
        fontSize: 18,        
    },
})

export default tab1
