import React from 'react'
import { ScrollView, View, Text, StyleSheet } from 'react-native'
import i18n from '../i18n/index'
import { BlockText } from '../components'

const tab1 = () => {
    return (
        <ScrollView style={styles.container}>  
            <BlockText text= {i18n.t('overview.intro.text1')} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    
})

export default tab1
